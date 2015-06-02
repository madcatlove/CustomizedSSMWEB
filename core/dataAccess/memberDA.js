
var db = require('../mysql');
var u  = require('../Util');

/**
 * 회원 관리 데이터 접근 모듈
 *
 * @class MemberDA
 * @module DataAccess
 * @type {{getMemberById: Function, insertMember: Function, clearTutorialGuide: Function}}
 */
var dataAccess = {

    /**
     * 아이디를 통한 멤버 정보 가져옴.
     *
     * @method getMemberById
     * @param userid
     * @param resultCallback
     * @async
     */
    getMemberById : function( userid, resultCallback) {

        var queryStatement = 'SELECT * FROM memberInfo WHERE userid = ?';

        db.getConnection( function(conn) {
            conn.query( queryStatement, [userid], function(err, result) {
                if( err ) {
                    console.error( ' memberDA Error (getMemberById) :  ', err);
                    throw u.error(u.ETYPE.CRITICAL.message + ' : ' + err.message , u.ETYPE.CRITICAL.errorCode);
                }
                resultCallback( result[0] );
                conn.release();
            })
        })
    },

    /**
     * 멤버 추가 ( member 객체 받음 ( userid, userpwd 포함하고 있어야함 )
     *
     * @method insertMember
     * @param member
     * @param resultCallback
     * @async
     */
    insertMember : function( member, resultCallback) {
        var queryStatement = 'INSERT INTO memberInfo (userid, userpwd, regdate) VALUES (?,?, NOW())';

        db.getConnection( function(conn) {
            conn.query( queryStatement, [ member.userid, member.userpwd ], function(err, result) {
                if( err ) {
                    console.error( ' memberDA Error (insertMember) :  ', err);
                    throw u.error(u.ETYPE.CRITICAL.message + ' : ' + err.message , u.ETYPE.CRITICAL.errorCode);
                }
                resultCallback( result.insertId );
                conn.release();
            })
        })
    },

    /**
     * 튜토리얼 가이드 클리어 여부 Y 변환 ( 수행 완료 표시 )
     *
     * @method clearTutorialGuide
     * @param member
     * @param resultCallback
     * @async
     */
    clearTutorialGuide : function(member ,resultCallback) {

        var queryStatement = "UPDATE memberInfo SET guideClear = 'Y' WHERE seq = ?";

        db.getConnection( function(conn) {
            conn.query( queryStatement, [member.seq], function(err, result) {
                if( err ) {
                    console.error( ' memberDA Error (clearTutorialGuide) :  ', err);
                    throw u.error(u.ETYPE.CRITICAL.message + ' : ' + err.message , u.ETYPE.CRITICAL.errorCode);
                }

                resultCallback( result.affectedRows );
                conn.release();
            })
        })

    }


};

/* EXPORT */
module.exports = dataAccess;