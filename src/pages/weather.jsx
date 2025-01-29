//  import React, { useEffect, useState } from "react";
//  import axios from 'axios';
//  import Navbar from '../component/navbar'

// const GetWeather =()=> {
//   const [weathers, setWeather] = useState([])


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
  const apiKey = '49deb005e199097c4ec9ff191370663e'; 

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.worldweatheronline.com/premium/v1/weather.ashx`,
          {
            params: {
              key: apiKey,
              q: city,
              format: "json",
              num_of_days: 1,
            },
          }
        );
        setWeather(response.data.data.current_condition[0]);
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
          <li>Temperature: {weather.temp_C}°C</li>
          <li>Condition: {weather.weatherDesc[0].value}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind Speed: {weather.windspeedKmph} km/h</li>
        </ul>
      )}
    </>
  );
};

export default GetWeather;

 
       
    
     
