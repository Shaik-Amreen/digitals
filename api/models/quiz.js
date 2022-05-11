const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const quizis = new Schema({
    topicname : {type : String,required : true,unique:true},
    quiztime : {type : Number},
    questions:{type:Array},
})
const quiz = mongoose.model('quizzes',quizis);
module.exports=quiz; 
