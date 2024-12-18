module.exports = (app) => {
  const todoList = require('../controllers/todoListController');

  app.route('/tasks')
    .get(todoList.get_all_tasks)
    .post(todoList.create_a_task);

  app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);
};
