const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const fileSchema = new Schema({
    file_name:{
        type:String,
        required:true
    },
    file_tag:{
        type:String
    },
    created_on:{
        type:Date,
        default:Date.now()
    },
    last_accessed_on:{
        type:Date
    },
    last_modified_on:{
        type:Date
    },
    file_url:{
        type:String
    }
})

module.exports = mongoose.model('File', fileSchema);