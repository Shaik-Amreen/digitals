const technology = require('../models/studentspecifications.model');

//post technological details
exports.postspecification=(req,res)=>{

    req.body.forEach((element,i) => {
        technology.create(element,(err,doc)=>{
            if(err)
            {
              if(req.body.length-1==i)  
                {res.send({message:"error"})}
            }
            else if(i==req.body.length-1){return res.send({message:"success"})}  
        })
    });

  
   
}

//get technology details by technology
exports.getspecification=(req,res)=>{
    technology.find({technology:req.body.technology},(err,docs)=>{
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

//get technology details by technology
exports.getstudentspecification=(req,res)=>{
    technology.find({mail:req.body.mail},(err,docs)=>{
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
