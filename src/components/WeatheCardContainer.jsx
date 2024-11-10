import React from 'react';
import WeatherCard from './WeatherCard';

const WeatherCardContainer = ({ weather }) => {
  if (!weather || !weather.main) return null;

  const weatherData = {
    feels_like: weather.main.feels_like, 
    temp_min: weather.main.temp_min,
    temp_max: weather.main.temp_max,
    pressure: weather.main.pressure,
    humidity: weather.main.humidity
  };

  return (
    <div className="flex justify-center">
      {Object.entries(weatherData).map(([key, value]) => (
        <WeatherCard key={key} title={key} value={value} />
      ))}
    </div>
  );
};

export default WeatherCardContainer;
