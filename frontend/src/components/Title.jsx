import React from "react";
import icon from "../assets/icon.png";

const Title = () => {
  return (
    <div className="flex items-center mt-7 gap-2">
      <img src={icon} alt="Icon" className="w-8 " />
      <h1 className="text-3xl font-bold">Task Tracker</h1>
    </div>
  );
};

export default Title;
