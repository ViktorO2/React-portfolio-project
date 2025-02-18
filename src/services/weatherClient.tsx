import axios from "axios";

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

export const fetchWeather = async (city: string) => {
  if (!city) throw new Error("City name is required");

  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`,
  );

  return response.data;
};
