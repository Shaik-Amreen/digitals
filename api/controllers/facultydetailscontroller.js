const facultydetails = require('../models/facultydetails');
const faculty = require('../models/facultymodel');
exports.uploadfacultydetails=(req,res)=>{
    facultydetails.create(req.body,(err,doc)=>{
        if(err)
        {
            console.log(err)
            res.send({message:"error"})
        }
        else res.send({message:"success"})
    }
    )
}





exports.getfacultydetails=(req,res)=>{
    facultydetails.findOne({facultymail:req.body.facultymail},(err,doc)=>{
        if(err)
        {
            console.log(err);
            
        }
        else
        { 
                faculty.findOne({facultymail:req.body.facultymail},(err,data)=>{
                    if(err)
                    {
                        console.log(err);
                        
                    }
                    else
                    {
                        console.log(data)
                        res.send({docs:data,details:doc})
                    }
                    }
                )
            
        }
        }
    )
}

