import React from "react";
import './Weather.css';

const Weather = ({ humidity, temperature, uvIndex, weatherCode }) => {
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