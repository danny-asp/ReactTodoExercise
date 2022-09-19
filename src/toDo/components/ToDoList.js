import React, { useState } from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";
import "./ToDoList.css";

function ToDoList() {
  const [taskList, setTaskList] = useState([]);

  const addTask = (task) => {
    const newTasks = [task, ...taskList];

    setTaskList(newTasks);
  };

  const onDelite = (currTask) => {
    let updatedAterDelite = [...taskList].filter((task) => task.id !== currTask);
    setTaskList(updatedAterDelite);
  };

  const onDone = (currTask) => {
    currTask.style = "done";
    currTask.btnDisable = true;
    let updatedAfterDone = [...taskList];
    setTaskList(updatedAfterDone);
  };

  return (
    <div className="todo-list-wrap">
      <ToDoForm onSubmit={addTask} />
      <ToDo taskList={taskList} onDelite={onDelite} onDone={onDone} />
    </div>
  );
}

export default ToDoList;
