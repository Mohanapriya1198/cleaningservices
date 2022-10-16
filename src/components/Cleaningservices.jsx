import React from "react";
import "./Cleaningservices.css";
import { Router, Routes, Route } from "react-router-dom";

const Cleaningservices = () => {
  return (
    <div className="services">
      <div className="content">
        <div className="page-wrapper">
          {/* header start */}
          <header className="header js-header">
            <div className="container">
              <div className="logo">
                <a href="#">
                  al bahar al bayan<span>Building Cleaning Services</span>
                </a>
              </div>

              <nav className="nav js-nav">
                <ul className="list">
                  <Router>
                    <Routes>
                      <Route to="/home" activeStyle>
                        home
                      </Route>
                      <Route to="/about" activeStyle>
                        about
                      </Route>
                      <Route to="/services" activeStyle>
                        services
                      </Route>
                      <Route to="/pricing" activeStyle>
                        pricing
                      </Route>
                      <Route to="/contact" activeStyle>
                        contact
                      </Route>
                    </Routes>
                  </Router>
                  {/* <li>
                    <a href="#home">home</a>
                  </li>

                  <li>
                    <a href="#about">about</a>
                  </li>

                  <li>
                    <a href="#services">services</a>
                  </li>

                  <li>
                    <a href="#pricing">pricing</a>
                  </li>
                  <li>
                    <a href="#contact">contact</a>
                  </li> */}
                </ul>
              </nav>
            </div>
          </header>
          {/* header end */}
        </div>
      </div>
    </div>
  );
};

export default Cleaningservices;
