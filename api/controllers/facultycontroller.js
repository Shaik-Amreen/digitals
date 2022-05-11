const faculty = require('../models/facultymodel');
const student=require('../models/studentmodel')

//accessing study material details
exports.uploadmaterial=(req,res)=>{
    console.log(req.body)
    faculty.create(req.body,(err,doc)=>{
        if(err)
        {
           faculty.findOne({mail:req.body.mail},(e,d)=>{
               d.materialdetails.push(req.body.materialdetails)
               faculty.updateOne({mail:req.body.mail},{$set:d},(em,dm)=>{
                res.send({message:"success"})
               })
           })
        }
        else res.send({message:"success"})
    }
    )
}


exports.getmaterial=(req,res)=>{
    faculty.findOne({mail:req.body.mail},(err,doc)=>{
        if(err)
        {
            console.log(err);
            
        }
        else
        {
          res.send(doc)
        }
        }
    )
}

exports.getstudentmaterial=(req,res)=>{
    faculty.find((err,doc)=>{
        if(err)
        {
            console.log(err);
            
        }
        else
        {

    student.findOne({mail:req.body.mail},(error,data)=>{
        if(!error){
            let materials=[]
            doc.forEach(e=>{
                materials.push(...e.materialdetails)
            })
            materials=materials.filter(e=>(e.course==data.course,e.department==data.department,e.yearofjoining==data.yearofjoining))
            res.send(materials)
        }
    })

         
          

        }
        }
    )
}

exports.updatematerial=(req,res)=>{
    faculty.updateMany({facultymail:req.body.facultymail},
        {$set:req.body},(err,res)=>{
         
            if(err)
            {
                console.log(err)
                res.send("error while updating materail");
            }
            else
            {
                res.send("successfully updated");
            }
        }
    )}