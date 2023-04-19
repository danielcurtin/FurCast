import React from "react";
import './City.css';

import Weather from "../Weather/Weather";

const City = ({ weather }) => {
  return (
    <section>
      <Weather humidity={weather.humidity} temp={weather.temperature} uvIndex={weather.uvIndex} weatherCode={weather.weatherCode}/>
    </section>
  );
};

export default City;