'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

	console.log("in routes");

//alert("ff");
  // todoList Routes
  app.route('/tasks')
    .get(todoList.list_tasks)
	.post(todoList.read_a_login);

 app.route('/alltasks')
   .get(todoList.list_all_tasks);
	
  app.route('/tasks/:taskId')
    .get(todoList.read_a_login)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);
	
	// routes will go here
	/*
app.route('/tasks')
 .get(todoList.read_a_login);
 */
};
