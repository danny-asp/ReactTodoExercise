import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [result, setResult] = useState(Math.floor(Math.random() * 11));
  const [disableButton, setDisableButton] = useState(false);

  function incrementHandler() {
    setResult((previous) => previous + 1);
  }

  function decrementHAndler() {
    setResult((previous) => previous - 1);
  }

  function onChangeHandler(objectClicked) {
    if (objectClicked.target.name === "plus") {
      incrementHandler();
      if (result === 0) {
        setDisableButton(false);
      }
    } else {
      decrementHAndler();
      if (result - 1 === 0) {
        setDisableButton(true);
      }
    }
  }

  return (
    <div className="counterWrapper">
      <button disabled={disableButton} className="counterOperation" name="minus" onClick={onChangeHandler}>
        -
      </button>
      <span className="counterResult">{result}</span>
      <button className="counterOperation" name="plus" onClick={onChangeHandler}>
        +
      </button>
    </div>
  );
};

export default Counter;
