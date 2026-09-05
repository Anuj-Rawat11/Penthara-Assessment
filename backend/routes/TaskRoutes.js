const express = require("express");
const router = express.Router();
const {getTasks,addTask,updateTask,deleteTask}=require("../controllers/TaskController")


// Get all Tasks
router.get("/tasks",getTasks);
// Add Task
router.post("/tasks", addTask);

// Update Task
router.patch("/tasks/:id", updateTask);

// Delete Task
router.delete("/tasks/:id", deleteTask);

module.exports=router;