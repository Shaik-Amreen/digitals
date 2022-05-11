const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const faculty = new Schema({
    // course:{type:String,required:true},
    // department:{type:String,required:true},
    // subjectname:{type:String,required:true},
    // subjectcode:{type:String,required:true},
    // year:{type:String,required:true},
    // sem:{type:String,required:true},
    // unit:{type:String,required:true},
    materialdetails:{type:Array},
    mail:{type:String,required:true,unique:true}
})

const Faculty = mongoose.model('faculty',faculty);
module.exports=Faculty;