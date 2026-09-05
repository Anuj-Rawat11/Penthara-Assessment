import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTask, toggleTask, setEditTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          task={task}
          key={task.id}
          text={task.text}
          id={task.id}
          isComplete={task.isComplete}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          setEditTask={setEditTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
