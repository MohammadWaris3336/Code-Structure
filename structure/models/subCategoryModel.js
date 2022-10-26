const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let subCategory= new Schema({
    category_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
        required: true
    },
    subcategory:{
        type: String,
        required:true
    }
});

module.exports = mongoose.model("subcategory", subCategory);