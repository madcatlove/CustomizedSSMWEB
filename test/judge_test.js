var judgeSvc = require('../core/service/judgeSvc'),
    judgeSvcChap1 = require('../core/service/judgeChpt1Svc'),
    judgeSvcChap2 = require('../core/service/judgeChpt2Svc'),
    judgeSvcChap3 = require('../core/service/judgeChpt3Svc');


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
        test.deepEqual([], result, " Some errors for result ( invalid parameter count )");
    });



    test.done();
};

exports.TEST_chapter2 = function (test) {


    test.done();
};

exports.TEST_CHAPTER3 = function (test) {


    test.done();
};