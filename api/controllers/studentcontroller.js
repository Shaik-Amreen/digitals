const users = require("../models/usersmodel");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const JWTSECRET = 'digitals'
const quiz=require('../models/quiz')
const nodemailer = require('nodemailer');
const Students = require("../models/studentmodel");
const students = require("../models/studentmodel");
const { errorMonitor } = require("events");
const encodeBuffer = buffer => buffer.toString('base64')
const encodeString = string => encodeBuffer(Buffer.from(string))
const encodeData = data => encodeString(JSON.stringify(data))
const encrypt = (data) => {
  if (Buffer.isBuffer(data)) return encodeBuffer(data)
  if (typeof data === 'string') return encodeString(data)
  return encodeData(data)
}

//details of students
exports.poststudentdata=(req,res)=>{
    let user,userac,mails=[];
for(let c=0;c<req.body.length;c++)
   
    {
     user = new Students(req.body[c])
     passwordhashed=  bcrypt.hashSync(req.body[c].password,10);
        req.body[c].password=passwordhashed;
     userac=new users(req.body[c])
          user.save(function (err, results) {
           
          });

          userac.save(function (error,resp) {
              mails.push(req.body[c].mail)
           });
           if(c==req.body.length-1){
             if(mails.length!=0){
            let mailTransporter = nodemailer.createTransport
               ({
                   service: 'gmail.com',
                   auth: 
                   {
                       user: 'placementscycle@gmail.com',
                       pass: 'Placement@1'
                   },
               });
            let mailDetails =
               {
                   from:'placementscycle@gmail.com',
                   to: mails,
                   subject: 'DIGITALS',
                   html: `<p>Hey ! You have registered successfully in DIGITALS .</p>`,
               };
              
               mailTransporter.sendMail(mailDetails, function(error, datad) {
                   console.log({message:'hyy'})
                   if(error)
                   {
                       console.log('errr,err',error)
                      res.send({'error':'Connection is poor'})
                   } 
                   else
                   {
                    
                      res.send({message:'success'})
                   }
              })
            }
            else{
                res.send({message:'success'})
            }
        }
        }
        
}

//find details of required student 
exports.getstudentdata=(req,res)=>{
    students.findOne({studentmail:req.body.studentmail},(err,docs)=>{
        if(err)
        {
            console.log("error while finding details of student");
        }
        else
        {
            console.log("sucess",docs)
            
        }
    })
}


//get quiz
exports.getquiz = (req,res)=>{
    quiz.findOne({topicname:req.body.topicname},(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("get quiz",data);
            res.send({data : data});
        }
    })
}

//find details of required studentssssss
exports.getstudents=(req,res)=>{
    students.find({course:req.body.course,department:req.body.department},(err,docs)=>{
        if(err)
        {
            console.log("error while finding details of student");
        }
        else
        {
            res.send(docs)
            
        }
    })
}
//update student details
exports.updatestudentdata=(req,res)=>{
    students.updateMany({studentmail:req.body.studentmail},{$set:req.body},(err,docs)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log("successfully updated")
        }
    })
}