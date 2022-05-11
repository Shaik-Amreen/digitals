const mentors = require('../models/mentormodel');

//post mentors with students list
exports.poststudentlist=(req,res)=>{
   for(let c=0;c<req.body.length;c++){
    let user=new mentors(req.body[c])
    console.log(user,"...........")
    user.save(function (err, results) {

        if(err)
        {
            console.log(err,";;;;;;;;;;;;;;")
            if(c==req.body.length-1){res.send({message:"error"})}
        }
        else if(c==req.body.length-1){ res.send({message:"success"})}
    });
}
}

//get all students for a particular mentor
exports.getstudentlist=(req,res)=>{
    mentors.findOne({mentormail:req.body.mentormail},(err,docs)=>{
       if(err)
       {
           console.log(err)
       } 
       else
       {
           console.log("success")
           console.log(docs)
           res.send(docs)
       }
    })
}

//get all students for a particular mentor
exports.getstudents=(req,res)=>{
    mentors.find((err,docs)=>{
       if(err)
       {
           console.log(err)
       } 
       else
       {
           
           res.send(docs)
       }
    })
}

//update studentlist 
exports.updatestudentlist=(req,res)=>{
    mentors.updateOne({mentormail:req.body.mentormail},
        {$set:req.body},(err,docs)=>{
        if(err)
        {
            console.log(err)
        }
        else
        {
            console.log("success",docs)
        }
    })
}
