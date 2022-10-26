const express = require('express');
const bodyparser= require('body-parser');


const product= require('./route/product.route');
const category= require('./route/categoryroute');
const subcategory= require('./route/subCategoryRoute');
const user= require("./route/userRoute")
const car= require("./route/carRoute")
const app = express();

//category route

const mongoose= require('mongoose');
let dev_db= 'mongodb+srv://mongodb:mongodb@cluster0.mkua9he.mongodb.net/test';
const mongodb = process.env.MONGODB_URI || dev_db ;
mongoose.connect(mongodb);
mongoose.Promise= global.Promise;
const db= mongoose.connection;
db.on('error', console.error.bind(console, 'Mongoose connection error:'));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
app.use('/products', product)
app.use('/products', category)
app.use('/products', subcategory)
app.use('/products', user)
app.use('/products', car)

let port= 4000;
app.listen(port, () => {

console.log("Server is running on "+ port);
})