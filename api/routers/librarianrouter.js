const express=require("express");
var router = express.Router();
var librarian = require('../controllers/librariancontroller');
router.post('/book',librarian.book);
router.post('/bookname',librarian.bookname);
router.post('/updatebook',librarian.updatebook);
module.exports=router;