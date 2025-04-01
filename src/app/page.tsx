"use client"

import { useEffect, useState } from "react";

const cities = ["Calgary", "Vancouver","Shanghai", "Tokyo","New York", "London"]

export default function Home() {

   const [city, setCity ] = useState("Calgary");
   const [weather, setWeather ] = useState<any>(null);

   useEffect(() => {
    const fetchWeather = async () => {
       const apiKey = "17b199da9f8c2ccdd65090c7e00b6ba2";
       const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;
       const res = await fetch(url);
       const data = await res.json();
       console.log(data);
       
       setWeather(data);
    };

    fetchWeather();

   },[city])
   


  return (
    <div className="min-h-screen bg-teal-200 p-4">
      <h1 className="text-2xl font-bold text-center">Weather Information</h1>
      <select className="w-full p-2 mt-4 border rounded" value={city} onChange={ e => setCity(e.target.value)}>
       {cities.map((c)=>(
        <option key={c} value={c}> {c}</option>
       ))}
      </select>

      {weather && (
        <div className="text-center mt-4">
          <h2 className="text-xl font-bold">{weather.name}</h2>
          <p>{weather.weather[0].description}°C</p>
          <p className="text-lg font-semibold">{weather.main.temp}</p>
        </div>
      )}
       
       {/* <WeatherChart city={city}/> */}

    </div>
  );
}