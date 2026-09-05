const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskSchema = new Schema({
  id: { type: String, required: true, unique: true },
  text: { type: String, required: true },
  isComplete: { type: Boolean, required: true },
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
