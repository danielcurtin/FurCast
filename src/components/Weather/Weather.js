import React from "react";
import './Weather.css';

const Weather = ({ humidity, temp, uvIndex, precipChance, type }) => {

  const checkUv = () => {
    if (uvIndex > 7) {
      return 'careful';
    } else if (uvIndex > 2) {
      return 'stay-shady';
    } else {
      return 'roam-free';
    };
  };

  const getWeatherIcon = () => {
    if (type.includes('Sunny') || type.includes('Clear')) {
      return 'fa-sun';
    } else if (type.includes('Cloudy')) {
      return 'fa-cloud';
    } else if (type.includes('Snow') || type.includes('Ice') || type.includes('Flurries')) {
      return 'fa-snowflake';
    } else if (type.includes('Rain') || type.includes('Drizzle')) {
      return 'fa-cloud-rain';
    } else if (type.includes('Thunderstorm')) {
      return 'fa-cloud-bolt';
    } else if (type.includes('Fog')) {
      return 'fa-smog';
    };
  };

  return (
    <section className="weather-data">
      <div className="styling-break">
        <i className={`weather-icon fa-solid ${getWeatherIcon()}`}></i>
        <h1 className="temp">{Math.round(temp)}°F</h1>
        <div className="line-break"></div>
        <h2 className="weather-type">{type}</h2>
      </div>
      <div className="styling-break deeper-data">
        <h2 className="precip-chance">Chance for Precipitation <span>{precipChance}%</span></h2>
        <h2 className="humidity">Humidity <span>{humidity}%</span></h2>
        <h2 className="uv-index">UV Index <span className={checkUv()}>{uvIndex}</span></h2>
      </div>
      <h3 className="weather-note">Careful, pavement could be hot on paws right now!</h3>
    </section>
  );
};

export default Weather;