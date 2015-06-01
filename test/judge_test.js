var judgeSvc = require('../core/service/judgeSvc'),
    judgeSvcChap1 = require('../core/service/judgeChpt1Svc'),
    judgeSvcChap2 = require('../core/service/judgeChpt2Svc'),
    judgeSvcChap3 = require('../core/service/judgeChpt3Svc'),
    jUtil = require('../core/jUtils');


/**
 * 챕터1 단위태스트 모듈
 * @param test
 * @constructor
 */
exports.TEST_chapter1 = function (test) {


    /* 포인트 테스팅 */
    /*
     extra info :  { points: [ { x: 0, y: 0 }, { x: 3, y: 2 }, { x: 2, y: 1 } ] }
     Data ::  [ { blockName: 'Vertex2',
     blockType: 3,
     numParam: 2,
     data: { x: '0', y: '0' } },
     { blockName: 'Vertex2',
     blockType: 3,
     numParam: 2,
     data: { x: '3', y: '2' } },
     { blockName: 'Vertex2',
     blockType: 3,
     numParam: 2,
     data: { x: '2', y: '1' } } ]
     */

    /* EXECUTE TEST */
    var testPointFunc = judgeSvcChap1.point;
    var extraInfo = {points: [{x: 0, y: 0}, {x: 3, y: 2}, {x: 2, y: 1}]};
    var data = [
        {
            blockName: 'Vertex2',
            blockType: 3,
            numParam: 2,
            data: {x: '0', y: '0'}
        },
        {
            blockName: 'Vertex2',
            blockType: 3,
            numParam: 2,
            data: {x: '3', y: '2'}
        },
        {
            blockName: 'Vertex2',
            blockType: 3,
            numParam: 2,
            data: {x: '2', y: '1'}
        }
    ];
    testPointFunc( extraInfo, data, function(result) {
        test.deepEqual([], result, " Normal case ");
    });


    extraInfo = {points: [{x: 0, y: 0}, {x: 2, y: 1}]};
    data = [
        {
            blockName: 'Vertex2',
            blockType: 4,
            numParam: 2,
            data: {x: '0', y: '0'}
        },
        {
            blockName: 'Vertex2',
            blockType: 3,
            numParam: 2,
            data: {x: '2', y: '1'}
        }
    ];
    testPointFunc( extraInfo, data, function(result) {
        test.ok([] != result, " Some errors for result ( invalid parameter count )");
    });



    test.done();
};

exports.TEST_chapter2 = function (test) {

    /*
     extra info high :  { startpoint: { x: 0, y: 0, z: 0 }, size: 3 }
     data high :  [ { blockName: 'DrawBox',
     blockType: 6,
     numParam: 4,
     data: { size: '3', x: '0', y: '0', z: '0' } } ]
     */

    var testRectHighFunc = judgeSvcChap2.box;
    var extraInfo = {startpoint: {x: 0, y: 0, z: 0}, size: 3};
    var data = [
        {
            blockName: 'DrawBox',
            blockType: 6,
            numParam: 4,
            data: {size: '3', x: '0', y: '0', z: '0'}
        }];

    testRectHighFunc(extraInfo, data, function(result) {
       test.deepEqual([], result, " Test for normal case ");
    });


    extraInfo = {startpoint: {x: 0, y: 0, z: 0}, size: 3};
    data = [
        {
            blockName: 'Vertex2',
            blockType: 4,
            numParam: 4,
            data: {size: '3', x: '0', y: '0', z: '0'}
        }];
    testRectHighFunc(extraInfo, data, function(result) {
       test.notDeepEqual([], result, " Some errors for result ( invalid parameter count ) ");
    });



    test.done();
};

exports.TEST_CHAPTER3 = function (test) {

    /*
     { seq:
     [ { bType: 6, info: [Object] },
     { bType: 10, info: [Object] },
     { bType: 6, info: [Object] },
     { bType: 20 },
     { bType: 10, info: [Object] },
     { bType: 10, info: [Object] },
     { bType: 6, info: [Object] } ] }

     data translate :  [ { blockName: 'DrawBox',
     blockType: 6,
     numParam: 4,
     data: { size: '1', x: '0', y: '0', z: '0' } },
     { blockName: 'Translate',
     blockType: 10,
     numParam: 3,
     data: { x: '3', y: '0', z: '0' } },
     { blockName: 'DrawBox',
     blockType: 6,
     numParam: 4,
     data: { size: '2', x: '0', y: '0', z: '0' } },
     { blockName: 'IdentityMatrix',
     blockType: 20,
     numParam: 0,
     data: {} },
     { blockName: 'Translate',
     blockType: 10,
     numParam: 3,
     data: { x: '-3', y: '0', z: '0' } },
     { blockName: 'Translate',
     blockType: 10,
     numParam: 3,
     data: { x: '0', y: '3', z: '0' } },
     { blockName: 'DrawBox',
     blockType: 6,
     numParam: 4,
     data: { size: '1', x: '0', y: '-1', z: '0' } } ]
     */
    var testTranslateFunc = judgeSvcChap3.translate;
    var extraInfo = { seq:
        [
            { bType: 6, info: {size: '1', x: '0', y: '0', z: '0'} },
            { bType: 10, info: {x: '3', y: '0', z: '0'} },
            { bType: 6, info: {size: '2', x: '0', y: '0', z: '0'} },
            { bType: 20 },
            { bType: 10, info: {x: '-3', y: '0', z: '0'} },
            { bType: 10, info: {x: '0', y: '3', z: '0'} },
            { bType: 6, info: {size: '1', x: '0', y: '-1', z: '0'} }
        ] };

    var data = [
        {
            blockName: 'DrawBox',
            blockType: 6,
            numParam: 4,
            data: {size: '1', x: '0', y: '0', z: '0'}
        },
        {
            blockName: 'Translate',
            blockType: 10,
            numParam: 3,
            data: {x: '3', y: '0', z: '0'}
        },
        {
            blockName: 'DrawBox',
            blockType: 6,
            numParam: 4,
            data: {size: '2', x: '0', y: '0', z: '0'}
        },
        {
            blockName: 'IdentityMatrix',
            blockType: 20,
            numParam: 0,
            data: {}
        },
        {
            blockName: 'Translate',
            blockType: 10,
            numParam: 3,
            data: {x: '-3', y: '0', z: '0'}
        },
        {
            blockName: 'Translate',
            blockType: 10,
            numParam: 3,
            data: {x: '0', y: '3', z: '0'}
        },
        {
            blockName: 'DrawBox',
            blockType: 6,
            numParam: 4,
            data: {size: '1', x: '0', y: '-1', z: '0'}
        }];


    testTranslateFunc(extraInfo, data, function(result) {
       test.deepEqual([], result, " Normal test case ");
    });

    extraInfo = { seq:
        [ { bType: 6, info: [Object] },
            { bType: 10, info: [Object] },
            { bType: 6, info: [Object] },
            { bType: 20 },
            { bType: 10, info: [Object] },
            { bType: 10, info: [Object] },
            { bType: 6, info: [Object] } ] };

    data = [
        {
            blockName: 'DrawBox',
            blockType: 6,
            numParam: 4,
            data: {size: '1', x: '0', y: '0', z: '0'}
        },
        {
            blockName: 'Translate',
            blockType: 10,
            numParam: 3,
            data: {x: '3', y: '0', z: '0'}
        },
        {
            blockName: 'DrawBox',
            blockType: 6,
            numParam: 4,
            data: {size: '2', x: '0', y: '0', z: '0'}
        },
        {
            blockName: 'IdentityMatrix',
            blockType: 20,
            numParam: 0,
            data: {}
        },
        {
            blockName: 'Translate',
            blockType: 10,
            numParam: 3,
            data: {x: '-3', y: '0', z: '0'}
        },

        {
            blockName: 'DrawBox',
            blockType: 6,
            numParam: 4,
            data: {size: '1', x: '0', y: '-1', z: '0'}
        },
        {
            blockName: 'Translate',
            blockType: 10,
            numParam: 3,
            data: {x: '0', y: '3', z: '0'}
        }];

    testTranslateFunc(extraInfo, data, function(result) {
        test.deepEqual([jUtil.MSG_WRONG_BLOCK_PARAMS], result, " Some error case for translate ");
    });


    test.done();
};