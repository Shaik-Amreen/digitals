const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const techincalheads = new Schema({
    mail:{type:String,required:true,unique:true},
    specialization:{type:String,required:true},
    
})

const Techincalheads = mongoose.model('techincalheads',techincalheads);
module.exports=Techincalheads;