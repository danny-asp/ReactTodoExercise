import "./App.css";

import ExerciseContainer from "./UI/ExerciseContainer";
import Counter from "./counter/Counter";
import Filter from "./filter/Filter";
import WeatherApp from "./weather/WeatherApp";
import ToDoListApp from "./toDo/ToDoApp";

const exercises = [
  { id: 1, title: "Exercise One", body: <Counter /> },
  { id: 2, title: "Exercise Two", body: <Filter /> },
  { id: 3, title: "Exercise Three", body: <WeatherApp /> },
  { id: 4, title: "Exercise Four", body: <ToDoListApp /> }
];

function App() {
  return (
    <div className="App">
      <ExerciseContainer title={exercises[0].title} body={exercises[0].body} />
      <ExerciseContainer title={exercises[1].title} body={exercises[1].body} />
      <ExerciseContainer title={exercises[2].title} body={exercises[2].body} />
      <ExerciseContainer title={exercises[3].title} body={exercises[3].body} />
    </div>
  );
}

export default App;
