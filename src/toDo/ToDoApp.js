import React from "react";
// import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import "./ToDoApp.css";

const ToDoListApp = () => {
  return (
    <div className="toDoWrap">
      <ToDoList />
    </div>
  );
};

export default ToDoListApp;
