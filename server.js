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

// Define Employee Schema
const employeeSchema = new mongoose.Schema({
  name: String,
  position: String,
  department: String,
});

const Employee = mongoose.model('Employee', employeeSchema);

// CRUD Routes
server.get('/api/employees', async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

server.post('/api/employees', async (req, res) => {
  const newEmployee = new Employee(req.body);
  const savedEmployee = await newEmployee.save();
  res.json(savedEmployee);
});

server.put('/api/employees/:id', async (req, res) => {
  const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedEmployee);
});

server.delete('/api/employees/:id', async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: 'Employee deleted' });
});

// start server
server.listen(3000, () => {
  console.log("Listening at port 3000")
})