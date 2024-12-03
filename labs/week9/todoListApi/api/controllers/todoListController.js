const mongoose = require('mongoose');
const Task = require('../models/todoListModel');

exports.get_all_tasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);

  } catch (err) {
    res.status(500).json(err);
  }
};

exports.create_a_task = async (req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(200).json(newTask);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.read_a_task = async (req, res) => {
  try {
    const task = await Task.findById(req.params.taskId);
    if (!task) {
      res.status(404).json({ message: 'not found' });
    }
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.update_a_task = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.taskId, req.body, { new: true });
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.delete_a_task = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.taskId);
  } catch (err) {
    res.status(500).json(err);
  }
};
