export const BaseResponse = {
    /* 200 OK : 요청 성공 */
    SIGNIN_SUCCESS :{
        success: true,
        code: 200,
        message: '성공했습니다.',
    },

    /* 201 CREATED : 요청 성공, 자원 생성 */
    CREATE_WORDS_LIST_SUCCESS :{
        success: true,
        code: 201,
        message: '단어 목록 생성에 성공했습니다.',
    },

    /* 400 BAD_REQUEST : 잘못된 요청 */
    

    /* 401 UNAUTHORIZED : 인증되지 않은 사용자 */
    

    /* 403 FORBIDDEN : 권한이 없는 사용자 */

    /* 404 NOT_FOUND : Resource 를 찾을 수 없음 */

    /* 409 CONFLICT : Resource 의 현재 상태와 충돌. 보통 중복된 데이터 존재 */

    /* 500 INTERNAL_SERVER_ERROR */
    CREATE_WORDS_LIST_FAILED: {
        success: false,
        code: 500,
        message: '단어 목록 생성에 실패했습니다.',
    },
}