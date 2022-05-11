const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const librarian = new Schema({
    mail:{type:String,required:true},
    bookname:{type:String,required:true},
    book:{type:String,required:true}
})

const Librarian = mongoose.model('librarian',librarian);
module.exports=Librarian;