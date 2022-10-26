const mongoose=require("mongoose");
const Schema= mongoose.Schema;

let userSchema= new Schema({

    name: String,
    age: String,
    cars:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "car"
    }]
})

module.exports= mongoose.model("user", userSchema)