
var express = require('express'),
    router = express.Router();

var mainController = require('../controller/mainCont');


/**
 * Main Routing file
 *
 * @class MainRouter
 * @module Router
 */
router.use( function(req, res, next) {
   next();
});

//------------------------
// ROUTING start with '/'
//------------------------

router.get('/', mainController.index);



//--------------
// MODULE EXPORT
module.exports = router;
