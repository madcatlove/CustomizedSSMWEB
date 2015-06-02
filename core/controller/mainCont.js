
var u = require('../Util');
var async = require('async');

var tutorialService = require('../service/tutorialSvc');


/**
 * 메인 페이지 컨트롤러 (인덱스 페이지 )
 *
 * @class MainController
 * @module Controller
 * @type {{index: Function}}
 */
var controller = {


    /**
     * 인덱스 페이지 뷰 렌더러
     *
     * @method index
     * @param req
     * @param res
     */
    index : function(req, res) {
        var memberSession= req.session.member;
        var opt = {
            extraJS: [],
            member: memberSession
        }

        async.parallel(
        {
            tutorialChapterList : function( _callback) {
                tutorialService.getTutorialChapterList( function(result) {
                    _callback( null, result );
                })
            },



        },
            // 최종 콜백
            function finalExec(err, result) {

                for( var o in result ) {
                    opt[o] = result[o];
                }
                res.render('index', opt);
            }

        );


    }

}


/* EXPORT */
module.exports = controller;