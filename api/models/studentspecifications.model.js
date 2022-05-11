const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const studentspecifications = new Schema({
  
    technology:{type:String,required:true},
    mail:{type:String,required:true}
})

const Studentspecifications = mongoose.model('studentspecifications',studentspecifications);
module.exports=Studentspecifications;