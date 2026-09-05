import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import Title from "../components/Title";
import TaskFilter from "../components/TaskFilter";
import {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
} from "../services/TaskService";

const TaskTracker = () => {
  const [editTask, setEditTask] = useState(null);
  const [status, setStatus] = useState("All");
  const [tasks, setTasks] = useState([]);

  const filteredTasks = tasks.filter((task) => {
    if (status === "Completed") {
      return task.isComplete;
    }
    if (status === "Pending") {
      return !task.isComplete;
    }
    return true;
  });

  const handleAddTask = async (task) => {
    try {
      const trimmedTask = task.trim();
      if (trimmedTask === "") {
        toast.error("Task cannot be empty!");
        return;
      }

      const isDuplicate = tasks.some(
        (task) => task.text.toLowerCase() === trimmedTask.toLowerCase(),
      );

      if (isDuplicate) {
        toast.error("Task already exists!");
        return;
      }

      const newTask = {
        id: crypto.randomUUID(),
        text: trimmedTask,
        isComplete: false,
      };

      await addTask(newTask);
      setTasks((prevTasks) => [...prevTasks, newTask]);
      toast.success("Task added successfully!");
    } catch (error) {
      toast.error("Error adding task:", error);
    }
  };

  const handleUpdateTask = async (editText) => {
    if (editText.trim() === "") {
      toast.error("Task cannot be empty!");
      return;
    }

    try {
      await updateTask(editTask.id, { text: editText });
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === editTask.id ? { ...task, text: editText } : task,
        ),
      );
      toast.success("Task updated successfully!");
    } catch (error) {
      toast.error("Error updating task:", error);
    } finally {
      setEditTask(null);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
      toast.success("Task deleted successfully!");
    } catch (error) {
      toast.error("Error deleting task:", error);
    }
  };

  const toggleTask = async (id) => {
    try {
      await updateTask(id, {
        isComplete: !tasks.find((task) => task.id === id).isComplete,
      });

      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, isComplete: !task.isComplete } : task,
        ),
      );

      toast.success("Task status updated successfully!");
    } catch (error) {
      toast.error("Error toggling task:", error);
    }
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await getTasks();
        setTasks(response.data);
      } catch (error) {
        toast.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="bg-black/25 backdrop-blur-sm place-self-center w-11/12 max-w-md flex flex-col p-7  min-h-[460px] rounded-xl">

      {/* Title */}
      <Title />

      {/* TaskForm */}
      <TaskForm
        editTask={editTask}
        addTask={handleAddTask}
        updateTask={handleUpdateTask}
      />

      {/* TaskFilter */}
      <TaskFilter status={status} setStatus={setStatus} />

      {/* TaskList */}
      <TaskList
        tasks={filteredTasks}
        deleteTask={handleDeleteTask}
        toggleTask={toggleTask}
        setEditTask={setEditTask}
      />
    </div>
  );
};

export default TaskTracker;