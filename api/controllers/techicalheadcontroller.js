//const Techincalheads = require('../models/technicalheadmodel');
const technicalhead = require('../models/technicalheadmodel');

//post techincal specializations of faculties
// exports.posttechincalspecialization=(req,res)=>{
//     technicalhead.create(req.body,(err,doc)=>{
//         if(err)
//         {
//             console.log(err)
//             res.send({message:"error"})
//         }
//         else res.send({message:"success"})
//     }
//     )
// }

exports.registerarr=(req,res)=>{
    
     for(let c=0;c<req.body.length;c++)
     {
         let v=req.body[c];
     technicalhead.create(v,(errs,datauser)=>{
         if(errs)
         {
             technicalhead.findOne({'mail':v.mail},(er,userdoc)=>{
                 
                 technicalhead.updateOne({mail:v.mail},{$set:v},(err,docs)=>{
                    
                         if(c==req.body.length-1)
                       { 
                         return res.send({message:'success'})
                     }
                    
             })
         })
        }
        else
        {
            if(c==req.body.length-1) { return res.send({message:"success"})}
        }
     })}
    }  
//get technical specializations of faculty
exports.gettechincalspecialization=(req,res)=>{
    technicalhead.find({technicalheadmail:req.body.technicalheadmail},(err,docs)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
           res.send(docs)
        }
    })
}

//uploading quiz
exports.quizupload = (req,res)=>{
    quiz.create(req.body,(err,doc)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("quiz successfully uploaded",doc);
            res.send("successfully uploaded");
        }
    })   
}

//get technical specializations of faculty
exports.gettechincals=(req,res)=>{
    technicalhead.find((err,docs)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {console.log(docs,";;;;;")
            res.send(docs)
        }
    })
}

//update specializations of faculty
exports.updatetechnicalspecialization=(req,res)=>{
    technicalhead.updateOne({technicalheadmail:req.body.technicalheadmail},
        {$set:{specialization:req.body.specialization}},(err,docs)=>{
        if(err)
        {
            console.log(err)
        }
        else
        {
            console.log("success",docs);
            res.send("successfully updated");
        }
    })
}