
/**
 * 유틸리티 제공 클래스
 *
 * @class Utility
 * @type {{trim: Function, result: Function, error: Function, assert: Function, ETYPE: {UNAUTH: *, FORBID: *, CRITICAL: *, UNDERCONSTRUCT: *}, htmlEntity: Function}}
 */
var utility = {


    /**
     * 스트링 trim 기능 제공
     *
     * @method trim
     * @param x
     * @returns {String}
     */
    trim : function myTrim(x) {
        return x.replace(/^\s+|\s+$/gm,'');
    },

    /**
     * 일관성있는 데이터로 재가공
     *
     * @method result
     * @param data
     * @param isError
     * @returns {{data: *, error: boolean}}
     */
    result : function(data, isError) {
        var s;
        s = {
            data : data,
            error : (isError == true )
        }

        return s;
    },

    /**
     * Create error Object.
     *
     * @method error
     * @param message
     * @param statusCode
     * @returns {Error}
     */
    error : function( message , statusCode, isExternal ) {
        var e = new Error(message);
        e.eType = (isExternal) ? 'external' : 'internal'; // 미들웨어에서 이값이 있으면 json 으로 에러 덤프.
        e.message = message;
        e.status = statusCode || 500;
        return e;
    },

    /**
     * 조건이 부합하는지 확인.
     * isExternal = 에러를 외부에 표출할지 아니면 내부에러로 처리할지
     * errorCode = 정의된 에러코드
     *
     * @method assert
     * @param condition
     * @param message
     * @param errorCode
     * @param isExternal
     * @throws {Error}
     */
    assert : function( condition, message, errorCode, isExternal ) {


        if( !message ) message = 'Critical Error ! ';

        if( !condition || "undefined" === typeof condition) {
            throw new this.error(message, errorCode , isExternal );
        }
    },

    /**
     * 에러코드 정의
     *
     * @property ETYPE
     */
    ETYPE : {
        UNAUTH : genErrorCode(401, ' 접근 권한이 없습니다. '),
        FORBID : genErrorCode(403, ' 잘못된 접근입니다. '),
        CRITICAL : genErrorCode(500, ' 내부 서버 오류 발생 '),
        UNDERCONSTRUCT : genErrorCode(403, ' 준비중인 페이지 입니다 '),
    },

    /**
     * HTML 특수 기호 치환
     *
     * @method htmlEntity
     * @param str
     * @returns {string}
     */
    htmlEntity : function(str) {
        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }


}


/**
 * 에러코드 생성 함수 ( 메세지와 , 코드 ) 객체로 wrap 후 리턴
 *
 * @method genErrorCode
 * @private
 * @param errorCode
 * @param message
 * @returns {{errorCode: *, message: *}}
 */
function genErrorCode( errorCode, message ) {
    return {
        errorCode : errorCode,
        message : message
    }
}

/* EXPORT */
module.exports = utility;