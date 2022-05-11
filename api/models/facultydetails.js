const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const facultydetails = new Schema({
    username:{type:String,required:true},
    mail:{type:String,required:true,unique:true},
    role:{type:Array,required:true}
    
})

const Facultydetails = mongoose.model('facultydetails',facultydetails);
module.exports=Facultydetails;