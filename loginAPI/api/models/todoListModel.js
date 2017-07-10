'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter the name of the task'
  },
  password: {
    type: String,
    Required: 'Kindly enter password'
  },
});


module.exports = mongoose.model('login', TaskSchema);

//module.exports = mongoose.model('employee', EmployeeSchema);