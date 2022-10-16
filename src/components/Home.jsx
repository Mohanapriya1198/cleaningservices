import React from "react";
import home from "../Images/home img.jpg";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container">
        <div className="grid">
          <div className="home-text">
            <h1>need cleaning services</h1>
            <p>
              Cleaning is the process of removing unwanted substances, such as
              dirt, infectious agents, and other impurities, from an object or
              environment. Cleaning occurs in many different contexts and uses
              many different methods.
            </p>
            <div className="btn-wrap">
              <a href="#about" className="btn">
                know more
              </a>
            </div>
          </div>
          <div className="home-img">
            <img src={home} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
