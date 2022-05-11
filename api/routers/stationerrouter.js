const express=require("express");
var router = express.Router();
var stationer = require('../controllers/stationercontroller');
router.post('/recordsavailability',stationer.recordsavailability);
router.post('/records',stationer.records);
module.exports=router;