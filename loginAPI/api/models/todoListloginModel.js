'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter the name of the task'
  },
  address: {
    type: String
  },
}); 

module.exports = mongoose.model('employee', EmployeeSchema);

//module.exports = mongoose.model('employee', EmployeeSchema);