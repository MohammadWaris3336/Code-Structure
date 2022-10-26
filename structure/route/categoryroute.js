const express = require("express");
const catroute= express.Router();

const catcont = require("../controllers/categorycontroller");



catroute.post("/add-category", catcont.addcategory);


module.exports = catroute;
