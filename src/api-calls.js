const getWeather = location => {
  return fetch(`https://api.tomorrow.io/v4/weather/realtime?units=imperial&location=${location}&apikey=${process.env.REACT_APP_API_KEY}`)
  .then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error();
    }
  });
};

export default getWeather;