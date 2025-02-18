import { useContext, useState, createContext, useMemo } from "react";

interface WeatherContextType {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [city, setCity] = useState<string>("");

  const value = useMemo(() => ({ city, setCity }), [city, setCity]);
  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeather must be used within a WeatherProvider");
  }
  return context;
};
