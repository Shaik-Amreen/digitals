const express=require("express");
var router = express.Router();
var student = require('../controllers/studentcontroller');
var specification=require('../controllers/studentspecification.controller')

router.post('/poststudentdata',student.poststudentdata);
router.post('/getstudentdata',student.getstudentdata);
router.post('/getstudents',student.getstudents);
router.post('/updatestudentdata',student.updatestudentdata);

router.post('/getstudentspecification',specification.getstudentspecification)
router.post('/getspecification',specification.getspecification)
router.post('/postspecification',specification.postspecification)

module.exports=router;