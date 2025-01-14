import { Injectable } from '@nestjs/common';
import { FastApiService } from 'src/utils/fastAPI/fastAPI.service';
import { WordRepository } from './word.repository';
import { Word } from './word.entity';
import {response,errResponse } from '../response/response';
import { BaseResponse } from '../response/response.status';
import { Wordlist } from 'ethers';


@Injectable()
export class WordService{
    
    constructor(
        private readonly wordRepository : WordRepository,
        private readonly fastApiService: FastApiService,
     ){}

     async createWordsList() {
    
        try {
          // FastAPI에서 단어 가져오기
          const { answer, similar_words } = await this.fastApiService.generateWordsList();
          // 정답 단어 추가
          const answerEntity = new Word();
          answerEntity.word = answer.word;
          answerEntity.similarity = 1;
          answerEntity.isAnswer = true;
          await Word.save(answerEntity);


    
          // 단어 리스트 생성
          const wordsList = similar_words.map(({ word, similarity }) => {
            const wordEntity = new Word();
            wordEntity.word = word;
            wordEntity.similarity = similarity;
            wordEntity.isAnswer = false; 
            Word.save(wordEntity);
          });

          console.log("list" , wordsList);
    

    
          // 단어 저장
          //await this.wordRepository.saveWordsList([answerEntity,...wordsList]);
    
          return answer.word;
        } catch (error) {
          console.error(error);
          return errResponse(BaseResponse.CREATE_WORDS_LIST_FAILED);
        }
    }
}