const user = require("../models/userModel");

const adduser= function(req, res, next){

    let User = new user({
        name: req.body.name,
        age: req.body.age,
       
    })
    User.save(function(error){
        if (error){
            return next(error)
        }
        else{
            res.send("User added!")
        }
    })


}


module.exports={
    adduser
}