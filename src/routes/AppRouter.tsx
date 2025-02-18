import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AgeCalculator from "../components/AgeCalculator";
import BasicCalculator from "../components/BasicCalculator";
import AboutMe from "../components/AboutMe";
import TipCalculator from "../components/TipCalculator";
import HomePage from "../components/HomePage";
import WeatherApp from "../components/WeatherApp";
import RolexClock from "../components/RolexClock";
import PokemonSearch from "../components/PokemonSearch";
import Layout from "../components/layouts/Layout";
import { PokemonProvider } from "../components/hooks/PokemonContext";
import { WeatherProvider } from "../components/hooks/WeatherContext";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/age-calculator" element={<AgeCalculator />} />
          <Route path="/basic-calculator" element={<BasicCalculator />} />
          <Route path="/tip-calculator" element={<TipCalculator />} />

          <Route
            path="/weather-app"
            element={
              <WeatherProvider>
                <WeatherApp />
              </WeatherProvider>
            }
          />

          <Route path="/rolex-clock" element={<RolexClock />} />
          <Route
            path="/pokemon-search"
            element={
              <PokemonProvider>
                <PokemonSearch />
              </PokemonProvider>
            }
          ></Route>
          <Route path="/about-me" element={<AboutMe />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default AppRouter;
