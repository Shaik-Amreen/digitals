const users = require("../models/usersmodel");
const facultydetails = require("../models/facultydetails");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const JWTSECRET = 'digitals'
const nodemailer = require('nodemailer');
const Students = require("../models/studentmodel");
const encodeBuffer = buffer => buffer.toString('base64')
const encodeString = string => encodeBuffer(Buffer.from(string))
const encodeData = data => encodeString(JSON.stringify(data))
const encrypt = (data) => {
  if (Buffer.isBuffer(data)) return encodeBuffer(data)
  if (typeof data === 'string') return encodeString(data)
  return encodeData(data)
}

//user registration
exports.register=(req,res)=>{
    
        passwordhashed=  bcrypt.hashSync(req.body.password,10);
        req.body.password=passwordhashed;
        users.create(req.body,(errs,datauser)=>{
            if(errs)
            {   
                users.findOne({'mail':req.body.mail},(er,userdoc)=>{
                    req.body.role.push(...userdoc.role)
                users.updateOne({mail:req.body.mail},{$set:{role:req.body.role}},(err,docs)=>{
                    if(err)
                    {
                        res.send({message:'error'})
                    }
                    else
                    {
                        facultydetails.updateOne({mail:req.body.mail},{$set:{role:req.body.role}},(errd,docsk)=>{
                            if(errd)
                            {
                                res.send({message:'error'})
                            }
                            else
                            {
                                res.send({message:'success'})
                            }
                        })
                    }
                })
            })
            }
            else
            {
                
                
                if(req.body.role.includes('hod') || req.body.role.includes('faculty') || req.body.role.includes('librarian')|| req.body.role.includes('stationer')){

                    facultydetails.create(req.body,(err,data)=>{
                    if(err){
                        console.log(err)
                        res.send({message:'user already exists'})
                    }
                    else{
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
                            to: req.body.mail,
                            subject: 'DIGITALS',
                            html: `<p>Hey ! You have registered successfully in DIGITALS .</p>`,
                        };
                        console.log(mailDetails)
                        mailTransporter.sendMail(mailDetails, function(error, datad) {
                            if(err)
                            {
                               res.send({'error':'Connection is poor'})
                            } 
                            else
                            {
                               res.send({message:'success'})
                            }
                       })      
                    }
                })
            }
   
}})}



//upload by excel
exports.registerarr=(req,res)=>{
   let mails=[]
    console.log(mails)
    for(let c=0;c<req.body.length;c++)
    {
        let v=req.body[c];
    passwordhashed=  bcrypt.hashSync(v.password,10);
    v.password=passwordhashed;
    users.create(v,(errs,datauser)=>{
        if(errs)
        {
            users.findOne({'mail':v.mail},(er,userdoc)=>{
                v.role.push(...userdoc.role)
                users.updateOne({mail:v.mail},{$set:{role:v.role}},(err,docs)=>{
                    if(err)
                    {
                        if(c==req.body.length-1)
                        return res.send({message:'error'})
                    }
                    else
                    {
                        if(!v.role.includes('student')){
                        facultydetails.updateOne({mail:v.mail},{$set:{role:v.role}},(errd,docsk)=>{
                            if(errd)
                            {
                                if(c==req.body.length-1) return res.send({message:'error'})
                            }
                            else
                            {
                                if(c==req.body.length-1) return res.send({message:'success'})
                            }
                        })
                    }
                    else{
                        Students.updateOne({mail:v.mail},{$set:v},(errd,docsk)=>{
                            if(errd)
                            {
                                if(c==req.body.length-1) return res.send({message:'error'})
                            }
                            else
                            {
                                if(c==req.body.length-1)  return res.send({message:'success'})
                            }
                        }) 
                    }
                }
                })
            })
        }
        else
        {
            mails.push(v.mail)
            console.log(v)
            if(v.role.includes('hod') || v.role.includes('faculty') || v.role.includes('librarian')|| v.role.includes('stationer')){
            facultydetails.create(v,(err,data)=>{
                if(err){
                    console.log(err)
                    if(c==req.body.length-1) return res.send({message:'user already exists'})
                }
                else if(c==req.body.length-1){
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
                    console.log(mailDetails)
                    mailTransporter.sendMail(mailDetails, function(error, datad) {
                        if(err)
                        {
                           return res.send({'error':'Connection is poor'})
                        } 
                        else
                        {
                            console.log('llllllllllllllllll')
                            return res.send({message:'success'})
                        }
                   })      
                }
            })
        }
        else if(v.role.includes('student')){
            Students.create(v,(error,docs)=>{
                if(err){
                    return res.send({message:'user already exists'})
                }
                else if(c==req.body.length-1){
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
                    mailTransporter.sendMail(mailDetails, function(err, data) {
                        if(err)
                        {
                           return res.send({'error':'Connection is poor'})
                        } 
                        else
                        {
                            console.log('hyyyyyyy')
                            return res.send({message:'success'})
                        }
                   })         
                     
                }
            })
        }
    
}})}}

exports.getuser=async(req,res)=>{
    const {mail,password} = req.body
    const user = await users.findOne({'mail':mail}).lean()
    const token = jwt.sign({subject:req.body.mail},JWTSECRET)
    tokenHashed=  encrypt(token)
    if(user){
        
       let result=bcrypt.compareSync(password, user.password)
            if (result) {
                if(!user.role.includes('student'))
                {
                   
                    res.status(200).send({'token':tokenHashed,'facultydetailsdata':req.body.mail,"message":"success",role:user.role,username:user.username})
                      
                }

                else
                {
                    Students.findOne({mail:user.mail},function(err,data){
                        if(err)
                        { 
                        res.send(err)
                        }
                        else
                        {           console.log(data)   
                            res.status(200).send({'token':tokenHashed,'facultydetailsdata':req.body.mail,"message":"success",role:["student"],username:user.username})
                        }
                    })
                }
                
            } 
            
            else {res.json({status:'error',error:"Invalid password"})}
    }
    else{
        return res.json({status:'error',error:'Invalid mail'})
    }
}

exports.updateuser=(req,res)=>{
    console.log(req.body)
    users.updateOne({mail:req.body.mail},{$set:req.body},(err,docs)=>{
        if(!err)
        {
            facultydetails.updateOne({mail:req.body.mail},{$set:req.body},(err1,docs1)=>{
                if(!err1)
                {
                  return res.send({message:"updated"})
                        
                }
                else{
                    console.log(err)
                }
            })
        }
        else
        {
            console.log(err)
        }
    })
    
}


exports.userdetails=(req,res)=>{
       users.find((err,docs)=>{
           if(!err)
           {
           docs=docs.filter(e=>!e.role.includes('student'))
           console.log(docs)
           res.send(docs)
           }
           else
           {
               console.log(err)
           }
       })
}


exports.deleteuser=(req,res)=>{
    users.deleteOne({mail:req.body.mail},(err,docs)=>{
        if(!err)
        {
            facultydetails.deleteOne({mail:req.body.mail},(err,docs)=>{
                if(!err)
                {
                    res.send({message:'userddeleted'});
                }
                else
                {
                    console.log(err)
                }
            })
        }
        else
        {
            console.log(err)
        }
    })
}