const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let carSchema = new Schema({

    make:String,
    model: String,
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

module.exports = mongoose.model("car", carSchema)
