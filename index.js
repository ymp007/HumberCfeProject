const express = require('express');
const connectDB = require('./config/connectDB');
const studentController = require('./routes/api/studentController')
const app = express();


//database Connection
connectDB();
//set a middleware to parse data
app.use(express.json());

 app.use('/api/students',studentController);


app.listen(5000);
