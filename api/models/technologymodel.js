const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const technologies = new Schema({
    
    technology:{type:String,required:true,unique:true},
    topics:{type:Array,required:true},
})

const Technologies = mongoose.model('technologies',technologies);
module.exports=Technologies;