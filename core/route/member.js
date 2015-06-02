

var express = require('express'),
    router = express.Router(),
    assert = require('assert');

var memberController = require('../controller/memberCont');

/**
 * 회원 기능 라우팅 파일
 *
 * @class MemberRouter
 * @module Router
 */
router.use( function(req, res, next) {
    console.log( req.params );
    next();

});



/* Routing */
router.post('/login', memberController.procLogin); // 로그인 처리.
router.get('/logout', memberController.procLogout); // 로그아웃 처리.
router.get('/join', memberController.renderJoin); // 회원가입 페이지
router.post('/join', memberController.procJoin); // 회원가입 처리
router.put('/clearTutorial', memberController.clearTutorialGuide); // 가이드 클리어


/* EXPORT */
module.exports = router;