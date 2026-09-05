import React from "react";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";
import edit_icon from "../assets/edit.png";

const TaskItem = ({
  task,
  text,
  id,
  isComplete,
  deleteTask,
  toggleTask,
  setEditTask,
}) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        className="flex flex-1 items-center cursor-pointer "
        onClick={() => toggleTask(id)}
      >
        <img
          src={isComplete ? tick : not_tick}
          alt={isComplete ? "Tick" : "Not Tick"}
          className="w-7"
        />

        <p
          className={
            isComplete
              ? "text-slate-700 ml-4 text-[17px] line-through decoration-slate-500 font-semibold"
              : "text-slate-700 ml-4 text-[17px] font-semibold"
          }
        >
          {text}
        </p>
      </div>
      <img
        src={edit_icon}
        alt="Update"
        className="w-3.5 cursor-pointer my-1"
        onClick={() => setEditTask(task)}
      />
      <img
        src={delete_icon}
        alt="Delete"
        className="w-3.5 my-1 cursor-pointer"
        onClick={() => deleteTask(id)}
      />
    </div>
  );
};

export default TaskItem;
