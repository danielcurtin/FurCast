import React from "react";
import './City.css';

import Weather from "../Weather/Weather";
import Header from "../Header/Header";

import sunBg from '../../assets/weather-bgs/sunny-bg.jpeg';
import cloudBg from '../../assets/weather-bgs/cloudy-bg.jpeg';
import rainBg from '../../assets/weather-bgs/rainy-bg.jpg';
import snowBg from '../../assets/weather-bgs/snowy-bg.jpeg';
import stormBg from '../../assets/weather-bgs/thunderstorm-bg.jpeg';

const City = ({ weather, city }) => {
  return (
    <section className="city-page" style={{backgroundImage: `url(${sunBg})`}}>
      <Header page={city}/>
      <Weather humidity={weather.humidity} temp={weather.temperature} uvIndex={weather.uvIndex} weatherCode={weather.weatherCode} precipChance={weather.precipitationProbability}/>
    </section>
  );
};

export default City;