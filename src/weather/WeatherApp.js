import React, { useState } from "react";
import "./WeatherApp.css";
import WeatherCard from "./WeatherCard";
import * as WeatherApi from "./api-data";

const WeatherApp = () => {
  const [currentWeather, setCurrentWeather] = useState("");

  async function fetchWeatherPlovdiv() {
    const response = await fetch(WeatherApi.weatherUrlPlovdiv);
    const data = await response.json();
    const dataNeeded = {
      id: data.name,
      currentTemp: data.main.temp,
      humidity: data.main.humidity,
      pressure: data.main.humidity,
      icon: data.weather[0].icon,
      description: data.weather[0].description
    };

    setCurrentWeather(dataNeeded);
    console.log(dataNeeded);
  }
  return (
    <div className="WeatherAppWrap">
      {currentWeather !== "" && <WeatherCard weather={currentWeather} />}
      {currentWeather === "" && (
        <button className="weather-btn" onClick={fetchWeatherPlovdiv}>
          Current Weather in Plovdiv
        </button>
      )}
    </div>
  );
};

export default WeatherApp;
