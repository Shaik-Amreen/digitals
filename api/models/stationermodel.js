const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const stationer = new Schema({
  
    recordsavailable:{type:String,required:true}
})

const Stationer = mongoose.model('stationer',stationer);
module.exports=Stationer;