
var express = require('express'),
    router = express.Router();

var u = require('../Util');
var galleryController = require('../controller/galleryCont');


/**
* 갤러리 라우팅 파일 ( 미들웨어 포함 )
*
* @class GalleryRouter
* @module Router
*/
router.use( function(req, res, next) {
    var sess = req.session;

    //if( !sess.member || !sess.hasOwnProperty('member') ) {
    //    throw u.error(u.ETYPE.UNAUTH.message, u.ETYPE.UNAUTH.errorCode, true);
    //}


    next();
});




//------------------------
// ROUTING start with '/'
//------------------------
router.get('/', galleryController.view); // 갤러리 리스트 뷰.
router.get('/info', galleryController.galleryList); // LIST JSON




//--------------
// MODULE EXPORT
module.exports = router;
