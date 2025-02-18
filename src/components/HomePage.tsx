import React from "react";
import "./styles/HomePage.css";
const HomePage: React.FC = () => {
  return (
    <section className="homepage">
      <div className="content-home">
        <h1>Welcome to My Portfolio</h1>
        <p className="p-homePage">
          Explore my projects, tools, and journey as a passionate Full-Stack
          Developer & DJ. Let's build something amazing together!
        </p>
        <a href="http://localhost:4000/about-me" className="cta-button">
          More about me
        </a>
      </div>
    </section>
  );
};

export default HomePage;
