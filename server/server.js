const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const server = express();

// Middleware
server.use(cors());
server.use(bodyParser.json());


// database stuff
mongoose.connect("mongodb://127.0.0.1:27017/emp_crud")
.then(() => console.log("MongoDB Connected"))
.catch((error) => console.log(error));

// Import Routes
const employeeRoutes = require('./routes/employees');
server.use('/api', employeeRoutes);

// start server
server.listen(3000, () => {
  console.log("Listening at port 3000")
})