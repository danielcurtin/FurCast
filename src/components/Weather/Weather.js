import React, { useState, useEffect } from "react";
import './Weather.css';

import { sanDiegoWeather } from "../../mock-data";
import weatherCodes from "./weather-codes";
import rainBg from '../../assets/weather-bgs/rainy-bg.jpg';

const Weather = ({ humidity, temperature, uvIndex, weatherCode, precipChance }) => {
  
  //temp for limited api calls/day
  humidity = sanDiegoWeather.humidity;
  temperature = sanDiegoWeather.temperature;
  uvIndex = sanDiegoWeather.uvIndex;
  weatherCode = sanDiegoWeather.weatherCode;
  precipChance = sanDiegoWeather.precipitationProbability;

  const [weatherType, setWeatherType] = useState('');
  const [uv, setUv] = useState(0);

  useEffect(() => {
    setWeatherType(weatherCodes[weatherCode]);
    setUv(uvIndex);
  }, [])

  const checkUv = () => {
    if (uv > 7) {
      return 'careful';
    } else if (uv > 2) {
      return 'stay-shady';
    } else {
      return 'roam-free';
    };
  };

  const getWeatherIcon = () => {
    if (weatherType.includes('Sunny')) {
      return 'fa-sun';
    } else if (weatherType.includes('Cloudy')) {
      return 'fa-cloud';
    } else if (weatherType.includes('Snow') || weatherType.includes('Ice') || weatherType.includes('Flurries')) {
      return 'fa-snowflake';
    } else if (weatherType.includes('Rain')) {
      return 'fa-cloud-rain';
    } else if (weatherType.includes('Thunderstorm')) {
      return 'fa-cloud-bolt';
    }
  };

  return (
    <section className="weather-data">
      <div className="styling-break">
        <i className={`weather-icon fa-solid ${getWeatherIcon()}`}></i>
        <h1 className="temp">{Math.round(temperature)}°F</h1>
        <div className="line-break"></div>
        <h2 className="weather-type">{weatherType}</h2>
      </div>
      <div className="styling-break deeper-data">
        <h2 className="precip-chance">Chance for Precipitation <span>{precipChance}%</span></h2>
        <h2 className="humidity">Humidity <span>{humidity}%</span></h2>
        <h2 className="uv-index">UV Index <span className={checkUv()}>{uv}</span></h2>
      </div>
      <h3 className="weather-note">Careful, pavement could be hot on paws right now!</h3>
    </section>
  );
};

export default Weather;