import React from "react";
import { ThemeToggle } from "./theme-toggle";

const AppContainer = () => {
  return (
    <div className="max-w-screen-md mx-auto p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-xl text-primary">Todo</div>
        </div>
        <ThemeToggle></ThemeToggle>
      </div>
      {/* <TaskInput></TaskInput>
      <TaskList></TaskList> */}
    </div>
  );
};

export default AppContainer;
