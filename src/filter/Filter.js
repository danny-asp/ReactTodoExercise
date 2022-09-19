import React, { useEffect, useState } from "react";
import "./Filter.css";

const Filter = () => {
  const arrayOfAnimals = [
    "Cat",
    "Dog",
    "Cow",
    "Chicken",
    "Bear",
    "Deer",
    "Ram",
    "Elephant",
    "lion",
    "tiger",
    "zebra",
    "wolf",
    "pinguin"
  ];
  const [userInput, setUserInput] = useState("");
  let updatedArray = [];

  return (
    <div className="filterWrap">
      <input
        className="filterInputField"
        onChange={(currentUserInput) => setUserInput(currentUserInput.target.value.toLowerCase().trim())}
      />
      <ul className="listOfAnimals">
        {
          (updatedArray = arrayOfAnimals
            .filter((singleAnimal) => singleAnimal.toLowerCase().includes(userInput))
            .map((singleAnimal) => (
              <li className="listElement" key={singleAnimal}>
                {singleAnimal}
              </li>
            )))
        }
      </ul>
      {updatedArray.length == 0 && <p className="failedSearch">No Results Found</p>}
    </div>
  );
};

export default Filter;
