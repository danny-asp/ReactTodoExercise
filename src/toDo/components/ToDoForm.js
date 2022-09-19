import React, { useState } from "react";
import "./ToDoForm.css";

function ToDoForm(props) {
  const [addTask, setAddTask] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    props.onSubmit({
      id: Math.random().toString(),
      text: addTask,
      style: "inProgres",
      btnDisable: false
      // style: "inProgress"
    });
    setAddTask("");
  };

  const onChangeHandler = (event) => {
    setAddTask(event.target.value);
  };

  return (
    <form className="todo-form" onSubmit={onSubmitHandler}>
      <input className="todo-input" type="text" onChange={onChangeHandler} placeholder="Add a task" value={addTask} />
    </form>
  );
}

export default ToDoForm;
