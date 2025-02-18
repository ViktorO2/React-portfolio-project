import React, { useCallback, useMemo } from "react";
import { ClipLoader } from "react-spinners";
import "../components/styles/WeatherApp.css";
import { useWeather } from "./hooks/WeatherContext";
import { useDebounce } from "./hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import { fetchWeather } from "../services/weatherClient";

interface WeatherData {
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
}

const WeatherApp: React.FC = () => {
  const { city, setCity } = useWeather();
  const debouncedCity = useDebounce(city, 1000);

  const { data, error, isFetching } = useQuery<WeatherData>({
    queryKey: ["weather", debouncedCity],
    queryFn: () => fetchWeather(debouncedCity),
    enabled: !!debouncedCity,
  });

  const weatherData = useMemo(() => data || null, [data]);

  const handleCityChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCity(e.target.value);
    },
    [setCity],
  );
  return (
    <div className="weather-app">
      <h1>Weather App</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={handleCityChange}
        />
      </div>

      {error && <div className="error">City not found</div>}
      {isFetching && (
        <div className="loading">
          <ClipLoader />
        </div>
      )}

      {weatherData && (
        <div className="weather-details">
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt="Weather icon"
          />
          <h2>{weatherData.main.temp}°C</h2>
          <p>{weatherData.weather[0].description}</p>
          <div>
            🌡️ Feels like: <strong>{weatherData.main.feels_like}°C</strong>
          </div>
          <div>
            💧 Humidity: <strong>{weatherData.main.humidity}%</strong>
          </div>
          <div>
            💨 Wind speed: <strong>{weatherData.wind.speed} m/s</strong>
          </div>
        </div>
      )}

      {!city && !isFetching && !error && (
        <p className="p-details">🌍 Please enter a city to see the weather!</p>
      )}
    </div>
  );
};

export default WeatherApp;
