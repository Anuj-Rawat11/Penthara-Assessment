const Task = require("../models/Task");

// Get all tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add Task
const addTask = async (req, res) => {
  try {
    await Task.create(req.body);
    res.status(201).send("Task added Successfully...");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update Task

const updateTask = async (req, res) => {
  try {
    const id = req.params.id;
    await Task.updateOne({ id }, req.body);
    res.status(200).send("Task Updated Successfully...");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete Task
const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    await Task.deleteOne({ id });
    res.status(204).send("Task Deleted Successfully...");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getTasks, addTask, updateTask, deleteTask };
