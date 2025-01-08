import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameController } from './game.controller';
import { GameRepository } from './game.repository';

@Module({
  controllers: [GameController],
  providers: [GameService,GameRepository],
  exports: [GameRepository]
})
export class GameModule {}
