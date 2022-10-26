const express = require("express");
const userRoute = express.Router();


const usercont = require("../controllers/userController")
userRoute.post("/add-user", usercont.adduser)


module.exports = userRoute; 