const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const students = new Schema({
    rollnumber:{type:'string', index: {unique: true, dropDups: true}},
    mail:{type:String,unique:true},
    username:{type:String},
    yearofjoining:{type:String},
    department:{type:String},
    course:{type:String},
    mobile:{type:String}
})

const Students = mongoose.model('students',students);
module.exports=Students;
