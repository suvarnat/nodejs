'use strict';


var mongoose = require('mongoose');
 var Task = mongoose.model('login');
var Employee = mongoose.model('employee');
console.log("Connected correctly to server");


exports.list_all_tasks = function(req, res) {
	console.log("in list all tasks");
	res.setHeader('Access-Control-Allow-Origin', '*');
  Employee.find({}, function(err, employee) {
    if (err)
      res.send(err);
	  console.log(employee);
    res.json(employee);
  });
};

exports.list_tasks = function(req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
   Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};



exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_login = function(req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
  Task.find({name:req.body.name,password:req.body.password}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

/*exports.read_a_task = function(req, res) {
	
  Task.find( function(err, task) {
	 
    if (err)
      res.send(err);
    res.json(task);
  });
};

*/

exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate(req.params.taskId, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_task = function(req, res) {


  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};