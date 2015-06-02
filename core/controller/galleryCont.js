
var u = require('../Util');
var galleryService = require('../service/gallerySvc'),
    tutorialService = require('../service/tutorialSvc');

var async = require('async');

/**
 * Gallery controller 갤러리 컨트롤러
 *
 * @class GalleryController
 * @module Controller
 * @type {{view: Function, galleryList: Function}}
 */
var controller = {

    /**
     * 갤러리 뷰 메소드
     *
     * @method view
     * @param req
     * @param res
     */
    view : function(req, res) {
        var page = req.query.page;
        if( !page ) page = 1;
        var sess = req.session;


        var opt = {

            extraJS : [ 'freeDraw/FBlock.js', 'freeDraw/processing.js', 'gallery.js', 'fotorama.js' , 'freeDraw/processing_touchevent.js'],
            extraCSS : [ 'fotorama.css'],
            member : sess.member
        };

        async.waterfall([
            /* 튜토리얼 챕터별 리스트 생성 */
            function makeChapterList( _callback) {
                tutorialService.getTutorialChapterList( function(result) {
                    opt.tutorialChapterList = result;
                    _callback( null );
                })
            },


        ],
            /* 최종 실행 콜백 */
            function finalExec(err ,result ) {
                res.render('gallery', opt);
            }
        );


    },

    /**
     * 갤러리 리스트 데이터 페이지 (JSON)
     *
     * @method galleryList
     * @param req
     * @param res
     */
    galleryList : function(req, res) {
        var page = parseInt(req.query.page || 1);

        var sParam = {
            page : page,
            countOffset : 0
        }

        galleryService.getGallery( sParam, function(result) {
            res.json(u.result( result ) );
        })

    }
}

/* EXPORT */
module.exports = controller;