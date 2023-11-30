import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import '../App.css';

const Weather = () => {

  const [weatherInfo, setWeatherInfo] = useState(null);
  const [city, setCity] = useState('Toronto');
  const [citySearch, setCitySearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const encodedCity = encodeURIComponent(city);
        const apiKey = '72bc81d9ef2b423e460c477a7a21e38d';
        const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${encodedCity}&appid=${apiKey}`;
        const response = await axios.get(apiUrl);
        setWeatherInfo(response.data);
        
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [city]);

  const handleSearch = () => {
    setCity(citySearch);
  };

  return (
    <div className="weatherTile">
     
        <SearchBar
          citySearch={citySearch}
          setCitySearch={setCitySearch}
          handleSearch={handleSearch}
        />
       
      {weatherInfo && (
        <div className="information">
          <h2>{weatherInfo.name}, {weatherInfo.sys.country}</h2>
          <img
            src={`http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`}
          />
          <p>{weatherInfo.weather[0].description}</p>
          <p>Temperature: {(weatherInfo.main.temp-273.15).toFixed(2)}°C</p>
          <p>Feels like: {(weatherInfo.main.feels_like-273.15).toFixed(2)}°C</p>
          <p>Humidity: {(weatherInfo.main.humidity)}%</p>
        </div>
      )}
    </div>
  );
};

export default Weather;