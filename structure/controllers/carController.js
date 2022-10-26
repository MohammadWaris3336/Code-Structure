const car = require("../models/carModel")

const addCar = function(req, res, next){
 
    let Car = new car({
        make: req.body.make,
        model: req.body.model,
        owner: mongoose.Schema.Types.ObjectId
    })
    Car.save(function(error){
        if(error){
            return next(error)
        }
        else{
            res.send("Cars added")
        }
    })

}

module.exports={
    addCar
}