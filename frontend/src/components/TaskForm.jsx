import React from "react";
import { useRef,useState, useEffect } from "react";

const TaskForm = ({ editTask, addTask, updateTask }) => {
  const [task, setTask] = useState("");
  const inputRef = useRef(null);
  const handleSubmit = () => {
    if (editTask) {
      updateTask(task);
    } else {
      addTask(task);
    }
    setTask(""); // Clear the input field after adding the task
  };

  useEffect(() => {
    if (editTask) {
      setTask(editTask.text);
      inputRef.current.focus();
    }
  }, [editTask]);

  return (
    <div className="flex items-center my-7 bg-gray-200 rounded-full">
      <input
        type="text"
        placeholder="Add a new task..."
        ref={inputRef}
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600 font-semibold"
      />
      <button
        onClick={handleSubmit}
        className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
      >
        {editTask ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default TaskForm;
