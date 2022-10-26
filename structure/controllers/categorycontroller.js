
const Category = require("../models/categoryModel")


const addcategory = function(req, res, next){

		const category = new Category({
			category:req.body.category
		})
		category.save(function(error){
			if(error){
				return next(error);
			}
			else{
				res.send("Category Added!");
			}
		})
	
	
}






module.exports={
	addcategory
}