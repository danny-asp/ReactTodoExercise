import React from "react";
import "./ToDo.css";

function ToDo({ taskList, onDelite, onDone }) {
  return taskList.map((task, index) => (
    <div className={task.style} key={index}>
      <div className="task-name">{task.text}</div>
      <div className="todo-btn-side">
        <button className="todo-btn" onClick={() => onDelite(task.id)}>
          <img className="todo-icon" src="../icons/remove.png" alt="delite task" />
        </button>
        <button className="todo-btn" disabled={task.btnDisable} onClick={() => onDone(task)}>
          <img className="todo-icon" src="../icons/accept.png" alt="mark as done" />
        </button>
      </div>
    </div>
  ));
}

export default ToDo;
