import React from "react";
import "./WeatherCard.css";

const WeatherCard = (props) => {
  const today = new Date();
  const actualTime = today.getHours() + ":" + today.getMinutes();
  console.log(props);
  return (
    <div className="weatherCardWrapper">
      <header className="weatherHeader">
        <div className="headerLeft">
          <div className="cityName">{props.weather.id}</div>
          <div className="temperature">{props.weather.currentTemp}</div>
        </div>
        <div className="headerRight">
          <img src={`./icons/${props.weather.icon}.png`} alt="current weather" className="weatherImg"></img>
        </div>
      </header>
      <main>
        <div className="weather-row">
          <span>Weather Description</span>
          <span>{props.weather.description}</span>
        </div>
        <div className="weather-row">
          <span>Humidity</span>
          <span>{props.weather.humidity}</span>
        </div>
        <div className="weather-row">
          <span>Pressure</span>
          <span>{props.weather.pressure}</span>
        </div>
      </main>
      <footer>{actualTime}</footer>
    </div>
  );
};

export default WeatherCard;
