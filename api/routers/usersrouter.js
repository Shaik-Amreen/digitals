const express=require("express");
var router = express.Router();
var users = require('../controllers/userscontroller');

router.post('/register',users.register);
router.post('/registerarr',users.registerarr);
router.post('/getuser',users.getuser);
router.post('/updateuser',users.updateuser);
router.post('/deleteuser',users.deleteuser);
router.post('/userdetails',users.userdetails);
module.exports=router;