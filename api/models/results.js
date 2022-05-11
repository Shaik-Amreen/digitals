const mongo = require("mongoose");
const schema = mongo.Schema;
const results = schema({
    topicname : {type : String},
    questions : {type : String},
    result : {type : String}
})

const result = mongo.model('results',results)
module.exports= result