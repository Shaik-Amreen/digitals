const express=require("express");
var router = express.Router();

var technicalhead = require('../controllers/techicalheadcontroller');
router.post('/posttechnicalspecialization',technicalhead.registerarr);
router.post('/gettechnicalspecialization',technicalhead.gettechincalspecialization);
router.post('/gettechnicals',technicalhead.gettechincals);
router.post('/updatetechnicalspecialization',technicalhead.updatetechnicalspecialization);
module.exports=router;