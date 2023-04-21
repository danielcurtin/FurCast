import React from "react";
import './City.css';

import Weather from "../Weather/Weather";
import Header from "../Header/Header";

import sunBg from '../../assets/weather-bgs/sunny-bg.jpeg';
import cloudBg from '../../assets/weather-bgs/cloudy-bg.jpeg';
import rainBg from '../../assets/weather-bgs/rainy-bg.jpg';
import snowBg from '../../assets/weather-bgs/snowy-bg.jpeg';
import stormBg from '../../assets/weather-bgs/thunderstorm-bg.jpeg';
import fogBg from '../../assets/weather-bgs/foggy-bg.jpeg';

const City = ({ weather, type, city }) => {

  const pickBg = () => {
    if (!type) return;
    
    if (type.includes('Sunny') || type.includes('Clear')) {
      return sunBg;
    } else if (type.includes('Cloudy')) {
      return cloudBg;
    } else if (type.includes('Snow') || type.includes('Ice') || type.includes('Flurries')) {
      return snowBg;
    } else if (type.includes('Rain') || type.includes('Drizzle')) {
      return rainBg;
    } else if (type.includes('Thunderstorm')) {
      return stormBg;
    } else if (type.includes('Fog')) {
      return fogBg;
    };
  };

  return (
    <section className="city-page" style={{backgroundImage: `url(${pickBg()})`}}>
      <Header page={city}/>
      <Weather humidity={weather.humidity} temp={weather.temperature} uvIndex={weather.uvIndex} precipChance={weather.precipitationProbability} type={type}/>
    </section>
  );
};

export default City;