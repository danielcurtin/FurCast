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

  const getNote = () => {
    if (temp > 72) {
      return 'Watch out for heatstroke, and pavement could be hot on paws!';
    } else if (temp < 20) {
      return 'It\'s pretty cold for the average dog - unless they prefer temperatures like this, limit to in & out until it warms up.';
    } else if (temp < 45) {
      return 'Small or Thin Coat dogs might get cold. Maybe only 15 minutes?';
    } else if (type.includes('Sunny') || type.includes('Clear')) {
      return 'It\'s nice out! Remember to stay hydrated!';
    } else if (type.includes('Snow') || type.includes('Flurries') || type.includes('Ice') || type.includes('Rain') || type.includes('Drizzle') || type.includes('Thunderstorm')) {
      return 'It\'s not all that nice out... but it\'s up to you.';
    } else if (type.includes('Fog')) {
      return 'If you can see your surroundings, go for it!';
    } else if (type.includes('Cloudy')) {
      return 'A couple clouds never hurt anyone!';
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
      <h3 className="weather-note">{getNote()}</h3>
    </section>
  );
};

export default Weather;