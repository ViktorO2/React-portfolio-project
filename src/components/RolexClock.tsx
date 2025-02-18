import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./styles/RolexClock.css";

const RolexClock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      const bulgariaTime = new Date(
        new Date().toLocaleString("en-US", { timeZone: "Europe/Sofia" }),
      );
      setTime(bulgariaTime);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDegree = (hours + minutes / 60) * 30;
  const minuteDegree = (minutes + seconds / 60) * 6;
  const secondDegree = seconds * 6;

  return (
    <div>
      <h1 className="rolex-title">Rolex Clock</h1>
      <div className="clock-container">
        <img src="/rolex-logo.png" alt="Rolex" className="rolex-logo"></img>
        <div className="clock-face">
          <div className="clock-number number-12">12</div>
          <div className="clock-number number-3">3</div>
          <div className="clock-number number-6">6</div>
          <div className="clock-number number-9">9</div>
          <motion.div
            className="hand hour-hand"
            style={{ transform: `rotate(${hourDegree}deg)` }}
          />
          <motion.div
            className="hand minute-hand"
            style={{ transform: `rotate(${minuteDegree}deg)` }}
          />
          <motion.div
            className="hand second-hand"
            style={{ transform: `rotate(${secondDegree}deg)` }}
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default RolexClock;
