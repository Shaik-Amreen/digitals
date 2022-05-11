const stationer = require('../models/stationermodel');
const students=require('../models/studentmodel')
const nodemailer = require('nodemailer');
//update whether records are available are not
exports.recordsavailability=(req,res)=>{
    console.log(req.body)
    let a='Records out of stock !' ; if(req.body.recordsavailable=="yes"){a="Records are available . Please collect"}
    stationer.find((error,docs)=>{
        students.find((err,docss)=>{
            if(err)
            {
                console.log("error while finding details of student");
            }
            else
            {
                let mails=[];docss.forEach(element => {
                    console.log(element)
                    mails.push(element.mail)
                });
                console.log(mails)
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
                    to:mails,
                    subject: 'DIGITALS',
                    html: `${a}`,
                };
               
                mailTransporter.sendMail(mailDetails, function(errord, datad) {
                    console.log({message:'hyy'})
                    if(errord)
                    {
                        console.log('errr,err',error)
                       res.send({'error':'Connection is poor'})
                    } 
                    else
                    {
                        console.log(docs)
                     if(docs.length==0){
                        stationer.create(req.body,(error,docs)=>{
                            console.log(error,docs)
                            res.send({message:"success"})
                         })
                     }
                     else{
                        if(req.body.recordsavailable=="yes"){
                        stationer.updateOne({recordsavailability:"no"},{$set:req.body},(error,docs)=>{
                            res.send({message:"success"})
                         })}
                         else{
                         stationer.updateOne({recordsavailability:"yes"},{$set:req.body},(error,docs)=>{
                            res.send({message:"success"})
                         })
                        }
                     }
                    }
               })
                 }
             })
    
    
})}



exports.records=(req,res)=>{
    stationer.find((error,docs)=>{
       res.send(docs)
    })
        
   
    
    
}