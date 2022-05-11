const technology = require('../models/technologymodel');

//post technological details
exports.posttechnologydetails=(req,res)=>{
    technology.create(req.body,(err,doc)=>{
        if(err)
        {
            console.log(err)
            res.send({message:"error"})
        }
        else res.send({message:"success"})
    }
    )
}

//get technology details
exports.gettechnologydetails=(req,res)=>{
    technology.findOne({technology:req.body.technology},(err,docs)=>{
        if(err)
        {
            console.log(err)
        }
        else
        {
            console.log("success",docs);
        }
    })
}

//update technology details
exports.updatetechnologydetails=(req,res)=>{
    technology.updateOne({technology:req.body.technology},{$set:req.body},(err,docs)=>{
        if(err)
        {
            console.log(err)
        }
        else
        {
            console.log("updated successfully");
            res.send("updated");
        }
    })
}