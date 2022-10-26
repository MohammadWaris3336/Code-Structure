const express = require("express")
const carRoute = express.Router();

const carcont = require("../controllers/carController")

carRoute.post("/add-cars", carcont.addCar)

module.exports = carRoute;