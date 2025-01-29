 import React, { useEffect, useState } from "react";
 import axios from 'axios';
 import Navbar from '../component/navbar'

const GetWeather =()=> {
  const [weathers, setWeather] = useState([])


useEffect(()=>{
  const fetchWeather = async()=>  {
const response = await axios.get(
    "https://www.tomorrow.io/weather-api/posts"
);
setWeather(response.data);
};
 fetchWeather();
}, [])

return (
    <>
    <Navbar/>
    <h1>Weather Posts</h1>
    {weathers.map((weather) => (
        <li>{weather.title}</li>
    ))}
    </>
)
}

export default GetWeather


 
       
    
         
    </>
  );
};

export default GetWeather;
