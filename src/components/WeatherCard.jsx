import React from 'react'

const WeatherCard = ({ title, value }) => {
    // Format the value if needed (e.g., converting temperature from Kelvin to Celsius)
    const formattedValue = title === 'feels_like' || title === 'temp_min' || title === 'temp_max'
    ? `${(value - 273.15).toFixed(2)} °C` // Convert from Kelvin to Celsius
    : (title === 'pressure' ? `${value} hPa` :  `${value} %`);
      
  
    return (
      <div className="p-4 rounded-lg shadow-sm text-center bg-white border border-blue-400 inline-block mt-32 mr-5">
        <h3 className="text-xl font-semibold">{title.replace('_', ' ').toUpperCase()}</h3>
        <p className="text-2xl font-bold">{formattedValue}</p>
      </div>
    );
  };
  

export default WeatherCard