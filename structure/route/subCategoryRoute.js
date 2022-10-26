const express= require("express");
const subCategoryRoute = express.Router();

const subcatcont = require("../controllers/subCategoryController")

subCategoryRoute.post('/add-sub-category', subcatcont.addsubcategory)

module.exports= subCategoryRoute;
