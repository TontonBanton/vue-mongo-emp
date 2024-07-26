const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

// create out express app
const app = express()
app.use(bodyParser.json())

// database stuff
mongoose.connect("mongodb://127.0.0.1:27017/emp_crud")
.then(() => console.log("Connected"))
.catch((error) => console.log(error));

// start server
app.listen(3000, () => {
  console.log("Listening at port 3000")
})