const librarian = require('../models/librarianmodel');

//uploading soft copies of books
exports.book=(req,res)=>{
    librarian.create(req.body,(err,doc)=>{
        if(err)
        {
            console.log(err)
            res.send({message:"error"})
        }
        else res.send({message:"success"})
    }
    )
}

//finding a book
exports.bookname=(req,res)=>{
    
    librarian.find((err,docs)=>{
        if(err)
        {
            console.log({message:"error"})
        }
        else
        {
            res.send(docs)
        }
    })
}

//update book
exports.updatebook=(req,res)=>{
    librarian.updateOne({bookname:req.body.bookname},{$set:req.body},(err,docs)=>{
        if(err)
        {
            console.log(err)
        }
        else
        {
            console.log("success",docs);
            res.send("updated successfully");
        }
    })
}