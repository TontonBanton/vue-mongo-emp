const express = require('express');
const server = express();

const cors = require('cors');
server.use(cors());

const routes = require('./routes/routes');
server.use(routes);


// database stuff
const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/emp_crud")
.then(() => console.log("MongoDB Connected"))
.catch((error) => console.log(error));


// start server
server.listen(3000, () => {
  console.log("Listening at port 3000")
})