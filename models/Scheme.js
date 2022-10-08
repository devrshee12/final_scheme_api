const mongoose = require("mongoose");


const SchemeSchema = new mongoose.Schema({
    category:{
        type: String,
        required: [true, "must provide the name"],
        trim: true
    },
    schemes:{
        type: Array,
        required: [true, "must provide the schemes array"],
        default: false,
        
    }
})


module.exports = mongoose.model("schemes", SchemeSchema);