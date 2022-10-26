const subCategory= require("../models/subCategoryModel")

const addsubcategory= function(req, res, next ){

    const subcategory= new subCategory({

        category_id: req.body.category_id,
        subcategory: req.body.subcategory

    })
    subcategory.save(function(error){
        if (error){
            return next(error)
        }
        else{
            res.send("Sub Category added!")
        }
    })
}

module.exports={
    addsubcategory
}