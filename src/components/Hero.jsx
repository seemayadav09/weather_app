import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherCardContainer from './WeatheCardContainer'



const Hero = () => {


    const [city, setCity] = useState('');
    const [weatherSummary, setWeatherSummary] = useState(null);
    const [error, setError] = useState('');

    const handleFetchWeather = async () => {
      try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=718979f95878ea1aff4127dfb49157b4`);
        setWeatherSummary(response.data);
        setError('');
      } catch (err) {
        setError('Could not fetch weather data. Please check the city name and try again.');
        setWeatherSummary(null);
      }
    };
   useEffect(() => {
    handleFetchWeather();
   }, []);

   console.log(weatherSummary)
  return (
    <>
    <div style={{width:'80%', margin:'auto', padding:'20px'}}>
        <div className='flex justify-center align-middle gap-10 items-center'>
            <div>
            <h1 className="text-4xl font-bold mb-5 mt-5">
            Search Your city <span className="text-blue-500">Weather!</span>
            </h1>
            <div className="w-full max-w-sm min-w-[200px] mt-2">
            <input className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Enter Your City Name"
            value={city}
            onChange={(e) => setCity(e.target.value)}/>
            </div>
            <button className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2" onClick={handleFetchWeather}>
                Fetch Weather
            </button>
            {error && <div className='text-red-600 mt-3'>{error}</div>}
            </div>

            {weatherSummary ? (
                <div>
                    <h1 className="font-bold text-5xl mt-10">
                    {(weatherSummary.main.temp - 273.15).toFixed(2)}°C
                    </h1>
                    <div>
                    <span className="text-blue-500 text-xl font-bold">
                        {weatherSummary.weather[0].description.toUpperCase()}
                    </span>
                    </div>
                </div>
                ) : (
                <p className="font-bold text-5xl mt-10">00.00 °C </p>
                )}

        </div>
    </div>
    <WeatherCardContainer weather={weatherSummary} />
    </>
  )
};

export default Hero