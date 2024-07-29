const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
  employee_id: {
    type: String,
    required: [true, 'Employee ID is required'],
    unique: true,
    trim: true,
    minlength: [4, 'Employee ID must be at least 4 characters long']
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters long'],
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  dept: {
    type: String,
    required: [true, 'Department is required'],
    trim: true
    //enum: ['HRMD', 'Engineering', 'Marketing', 'Sales', 'Finance']
  },
  position: {
    type: String,
    required: [true, 'Position is required'],
    trim: true,
    minlength: [2, 'Position must be at least 2 characters long'],
    maxlength: [50, 'Position cannot exceed 50 characters']
  },
}, { timestamps: true });

module.exports = mongoose.model('Employee', employeeSchema)