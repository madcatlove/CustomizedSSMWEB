/**
 * Redis Configuration
 *
 * @module config
 * @type {Object}
 */
module.exports = {
    host : 'localhost',
    port : 6379,
    db : 2,


    /**
     * Redis 서버가 응답이 없을시 에러 처리.
     *
     * @method errorHandler
     * @param req
     * @param res
     * @param next
     */
    errorHandler: function(req, res, next) {
        if( "undefined" === typeof req.session) {
            throw new Error(' Lost Redis Server Connection. ');
        }
        next();
    }
}