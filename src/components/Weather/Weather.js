import React from "react";
import './Weather.css';

import { sanDiegoWeather } from "../../mock-data";

const Weather = ({ humidity, temperature, uvIndex, weatherCode }) => {
  
  //temp for limited api calls/day
  humidity = sanDiegoWeather.humidity;
  temperature = sanDiegoWeather.temperature;
  uvIndex = sanDiegoWeather.uvIndex;
  weatherCode = sanDiegoWeather.weatherCode;

  return (
    <section>
      <h1>The humidity is: {humidity}%</h1>
      <h1>The temperature is: {temperature}°</h1>
      <h1>The uvIndex is: {uvIndex}</h1>
      <h1>The weatherCode is: {weatherCode}</h1>
    </section>
  );
};

export default Weather;