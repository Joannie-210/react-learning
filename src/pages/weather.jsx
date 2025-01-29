// import React, { useEffect, useState } from "react";
// import axios from 'axios';
// import Navbar from '../component/navbar'

// const GetWeather =()=> {
//     const [weathers, setWeather] = useState([])


// useEffect(()=>{
//   const fetchWeather = async()=>  {
// const response = await axios.get(
//     "https://www.tomorrow.io/weather-api/posts"
// );
// setWeather(response.data);
// };
//  fetchWeather();
// }, [])

// return (
//     <>
//     <Navbar/>
//     <h1>Weather Posts</h1>
//     {weathers.map((weather) => (
//         <li>{weather.title}</li>
//     ))}
//     </>
// )
// }

// export default GetWeather

import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../component/navbar";

const GetWeather = () => {
  const [weather, setWeather] = useState(null); 
  const [error, setError] = useState(null); 
  const city = "London"; 
  const apiKey = "49deb005e199097c4ec9ff191370663e"; 

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=London&appid=49deb005e199097c4ec9ff191370663e&units=metric`
        );
        setWeather(response.data); 
      } catch (err) {
        setError("Failed to fetch weather data."); 
      }
    };

    fetchWeather();
  }, [city, apiKey]);

  return (
    <>
      <Navbar />
      <h1>Weather in {city}</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!weather && !error && <p>Loading...</p>}
      {weather && (
        <ul>
          <li>Temperature: {weather.main.temp}°C</li>
          <li>Condition: {weather.weather[0].description}</li>
          <li>Humidity: {weather.main.humidity}%</li>
          <li>Wind Speed: {weather.wind.speed} m/s</li>
        </ul>
      )}
    </>
  );
};

export default GetWeather;
