import React from "react";
import "../components/styles/AboutMe.css";
import { FaLaptopCode, FaMusic, FaDumbbell } from "react-icons/fa";

const AboutMe: React.FC = () => {
  return (
    <section className="about-me">
      <div className="about-content">
        <div className="text-content">
          <h1>About Me</h1>
          <p>
            Hi, I'm <span className="highlight">Viktor</span>! I'm a passionate{" "}
            <span className="highlight">Full-Stack developer</span>, exploring
            modern technologies like <b>React</b> and <b>TypeScript</b> to
            create engaging user experiences.
          </p>
          <p>
            I also love <span className="highlight">DJ-ing</span> and fitness!
            Whether I'm mixing beats or lifting weights, I bring the same
            passion to everything I do.
          </p>
          <div className="icons">
            <FaLaptopCode className="icon" title="Coding" />
            <FaMusic className="icon" title="DJ-ing" />
            <FaDumbbell className="icon" title="Fitness" />
          </div>
        </div>
        <div className="image-content">
          <img
            src="https://preview.redd.it/3voe44t0gh861.png?auto=webp&s=07f65eac03e30cd3c38b2b27b4a5883d2a66ed23"
            alt="Profile"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
