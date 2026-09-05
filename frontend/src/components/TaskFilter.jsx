import React from "react";

const TaskFilter = ({ status, setStatus }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 p-2">
      <button
        className={`cursor-pointer px-4 py-1 rounded-full font-semibold  ${status === "All" ? "bg-orange-600 text-white" : "bg-gray-200 hover:bg-orange-600 hover:text-white"}`}
        onClick={() => setStatus("All")}
      >
        All
      </button>
      <button
        className={`cursor-pointer px-4 py-1 rounded-full font-semibold ${status === "Completed" ? "bg-orange-600 text-white" : "bg-gray-200 hover:bg-orange-600 hover:text-white"}`}
        onClick={() => setStatus("Completed")}
      >
        Completed
      </button>
      <button
        className={`cursor-pointer px-4 py-1 rounded-full font-semibold ${status === "Pending" ? "bg-orange-600 text-white" : "bg-gray-200 hover:bg-orange-600 hover:text-white"}`}
        onClick={() => setStatus("Pending")}
      >
        Pending
      </button>
    </div>
  );
};

export default TaskFilter;
