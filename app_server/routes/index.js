var express = require('express');
var router = express.Router();
var ctrIMekanlar=require('../controllers/mekanlar');
var ctrIDigerleri=require('../controllers/digerleri');
/* GET home page. */


router.get('/',ctrIMekanlar.anaSayfa);
router.get('/mekan',ctrIMekanlar.mekanBilgisi);
router.get('/mekan/yorum/yeni',ctrIMekanlar.yorumEkle);
router.get('/hakkinda',ctrIDigerleri.hakkinda);

module.exports = router;
