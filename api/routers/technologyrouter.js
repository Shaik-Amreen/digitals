const express=require("express");
var router = express.Router();
var technology = require('../controllers/technologycontroller');

router.post('/posttechnologydetails',technology.posttechnologydetails);
router.post('/gettechnologydetails',technology.gettechnologydetails);
router.post('/updatetechnologydetails',technology.updatetechnologydetails);
module.exports=router;
