const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mentors = new Schema({
    mail:{type:String,required:true},
    studentmail:{type:String,required:true}
})

const Mentors = mongoose.model('mentors',mentors);
module.exports=Mentors;