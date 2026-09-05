import React from "react";
import TaskTracker from "../src/pages/TaskTracker";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div
      className=" grid py-4 min-h-screen   
    bg-[url('./assets/bg-img.jpg')]
    bg-cover
    bg-center"
    >
      <TaskTracker />
         <ToastContainer />
    </div>
  );
};

export default App;

// bg-stone-500