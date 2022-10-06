var express = require('express');
var router = express.Router();
var ctrIMain=require('../controllers/main');
/* GET home page. */
router.get('/',ctrIMain.index )

module.exports = router;
