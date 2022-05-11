const express=require("express");
var router = express.Router();
var mentor = require('../controllers/mentorcontroller');
router.post('/poststudentlist',mentor.poststudentlist);
router.post('/getstudentlist',mentor.getstudentlist);
router.post('/updatestudentlist',mentor.updatestudentlist);
router.post('/getstudents',mentor.getstudents);
module.exports=router;
