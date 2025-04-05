"use client"

import { useEffect, useState } from "react";
import WeatherChart from "./components/WeatherChart";

const cities = ["Calgary", "Vancouver","Shanghai", "Tokyo","New York", "London"]

const weatherMapping: Record<string, { text: string; icon: string }> = {
  Clear: { text: "Clear", icon: "☀️" },
  Clouds: { text: "Cloudy", icon: "⛅" },
  Drizzle: { text: "Drizzle", icon: "🌦️" },
  Rain: { text: "Rain", icon: "🌧️" },
  Thunderstorm: { text: "Thunderstorm", icon: "⛈️" },
  Snow: { text: "Snow", icon: "❄️" },
  Mist: { text: "Mist", icon: "🌫️" },
  Smoke: { text: "Smoke", icon: "🌫️" },
  Haze: { text: "Haze", icon: "🌫️" },
  Dust: { text: "Dust", icon: "🌫️" },
  Fog: { text: "Fog", icon: "🌫️" },
  Sand: { text: "Sand", icon: "🌫️" },
  Ash: { text: "Ash", icon: "🌫️" },
  Squall: { text: "Squall", icon: "💨" },
  Tornado: { text: "Tornado", icon: "🌪️" },
};

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

   const currentMain = weather?.weather?.[0]?.main;
   const weatherInfo = weatherMapping[currentMain] ?? {
    text: currentMain ?? "Unknown",
    icon: "❔",
  };
   


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="max-w-xl w-full bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold text-center">Weather Forecast</h1>
      <select className="w-1/4 p-2 mt-4 border rounded" value={city} onChange={ e => setCity(e.target.value)}>
       {cities.map((c)=>(
        <option key={c} value={c}> {c}</option>
       ))}
      </select>

      {weather && (
        <div className="bg-white shodow-md rounded-lg p-4 text-center mt-6">
          <h2 className="text-xl font-bold mb-4">City: <span className="text-emerald-800">{weather.name}</span></h2>

          <div className="w-1/3 mx-auto p-[2px] rounded-xl bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
            <div className="bg-white rounded-xl p-4 text-center">
              <div className="text-8xl mb-2">{weatherInfo.icon}</div>
              <p className="text-gray-700 font-medium text-lg mb-1">
                 {weatherInfo.text}
              </p>
            </div>
          </div>
        
          <p className="text-lg font-semibold mt-3">
           Present Temperature: <span className="text-red-500">{weather.main.temp}°C</span>
          </p>
        </div>
      )}
       
       <WeatherChart city={city}/>

    </div>
    </div>
  );
}