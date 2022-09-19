import React, { useState } from "react";
import "./ExerciseContainer.css";

const ExerciseContainer = (props) => {
  const [isExerciseShown, setIsExerciseShown] = useState(false);

  const showExerciseHandler = () => {
    if (isExerciseShown) {
      setIsExerciseShown(false);
    } else {
      setIsExerciseShown(true);
    }
  };

  return (
    <div className="wrapper">
      {!isExerciseShown && (
        <button className="button" onClick={showExerciseHandler}>
          {props.title}
        </button>
      )}
      {isExerciseShown && (
        <div className="exercise">
          <h2 className="title">{props.title}</h2>
          <div className="exerciseBody">{props.body}</div>
          <button className="buttonClose" onClick={showExerciseHandler}>
            close
          </button>
        </div>
      )}
    </div>
  );
};

export default ExerciseContainer;
