const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const users = new Schema({
    mail:{type:String,required:true,unique:true},
    username:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:Array,required:true}
})

const Users = mongoose.model('registers',users);
module.exports=Users;