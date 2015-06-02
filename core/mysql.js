

var mysql = require('mysql');
var mysqlConfig = require('../config/mysqlConfig');

/**
 * 데이터 베이스 접속 제공
 *
 * @class MySQLPOOL
 * @module Connection
 * @constructor
 */
var pool = mysql.createPool({
    connectionLimit : mysqlConfig.dbPoolSize,
    host : mysqlConfig.host,
    port : mysqlConfig.port,
    user : mysqlConfig.userid,
    password : mysqlConfig.userpwd,
    database : mysqlConfig.userdb,
    charset : 'utf8_general_ci',
    dateStrings : true
});

var db = {

    /**
     * MySQL Database POOL 에서 커넥션을 꺼내옴
     *
     * @method getConnection
     * @throws {Error}
     * @param resultCallback
     * @async
     */
    getConnection : function(resultCallback) {
        pool.getConnection( function( err, connection) {
            if( err ) {
                throw err;
            }
            resultCallback(connection);
        })
    }
};

/* EXPORT */
module.exports = db;