import React from "react";
import "./Home.jsx";

import "./Cleaningservices.css";

import home from "../Images/home img.jpg";
import about from "../Images/about img.jpg";
import house from "../Images/house img.jpg";
import furniture from "../Images/furniture img.jpg";
import bathroom from "../Images/bathroom img.jpg";
import address from "../Images/address.png";
import phone from "../Images/phone.png";
import mail from "../Images/mail.png";
import wind from "../Images/window.jpg";

const cleaningservices = () => {
  return (
    <div className="services">
      <div className="content">
        <div className="page-wrapper">
          {/* header start */}
          <header className="header js-header">
            <div className="container">
              <div className="logo">
                <a href="#">
                  tolmol<span>Cleaning Services</span>
                </a>
              </div>
              {/* <button type="button" className="nav-toggle js-nav-toggler">
                <span></span>
              </button> */}
              <nav className="nav js-nav">
                <ul>
                  <li>
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
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          {/* header end */}

          {/* home section start */}
          <section className="home" id="home">
            <div className="container">
              <div className="grid">
                <div className="home-text">
                  <h1>need cleaning services</h1>
                  <p>wbhjwshowijwojjwsiojqwio</p>
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
          {/*home section end*/}
          {/* about section start */}
          <section className="about section-padding" id="about">
            <div className="container">
              <div className="grid">
                <div className="about-img">
                  <div className="img-box">
                    <img src={about} alt="img" />
                    <div className="box box-1">
                      <span>2k</span>
                      <p>satisfied clients</p>
                    </div>
                  </div>
                </div>
                <div className="about-text">
                  <div className="section-title">
                    <span className="title">about us</span>
                    <h2 className="sub-title">we're cleaning since 2020</h2>
                  </div>
                  <p>vhdgwhvdwhguwgyuegdyrgfyugryggrgr</p>
                </div>
              </div>
            </div>
          </section>
          {/* about section end */}
          {/* services section start */}
          <section className="services section-padding" id="services">
            <div className="container">
              <div className="section-title">
                <span className="title">services</span>
                <h2 className="sub-title">what we do</h2>
              </div>
              <div className="grid">
                {/* services item start */}
                <div className="services-item">
                  <div className="img-box">
                    <img src={bathroom} alt="img" />
                  </div>
                  <h3>bathroom cleaning</h3>
                </div>
                {/* services item end */}
                {/* services item start */}
                <div className="services-item">
                  <div className="img-box">
                    <img src={furniture} alt="img" />
                  </div>
                  <h3>furniture cleaning</h3>
                </div>
                {/* services item end */}

                {/* services item start */}
                <div className="services-item">
                  <div className="img-box">
                    <img src={house} alt="img" />
                  </div>
                  <h3>house cleaning</h3>
                </div>
                {/* services item end */}

                {/* services item start */}
                <div className="services-item">
                  <div className="img-box">
                    <img src={wind} alt="img" />
                  </div>
                  <h3>window cleaning</h3>
                </div>
                {/* services item end */}
              </div>
            </div>
          </section>
          {/* services section end */}
          {/* pricing section start */}
          <section className="pricing section-padding" id="pricing">
            <div className="container">
              <div className="section-title">
                <span className="title">pricing</span>
                <h2 className="sub-title">our pricing plans</h2>
              </div>
              <div className="grid">
                {/* basic plan start */}
                <div className="pricing-item">
                  <div className="pricing-header">
                    <h3>basic</h3>
                    <div className="price">
                      <span>$299</span>
                    </div>
                  </div>
                  <div className="pricing-body">
                    <ul>
                      <li>house cleaning</li>
                      <li>furniture cleaning</li>
                      <li>bathroom cleaning</li>
                      <li>window cleaning</li>
                    </ul>
                  </div>
                  <div className="pricing-footer">
                    <a href="#" className="btn">
                      get started
                    </a>
                  </div>
                </div>
                {/* basic plan end */}
                {/* standard plan start */}
                <div className="pricing-item">
                  <div className="pricing-header">
                    <h3>standard</h3>
                    <div className="price">
                      <span>$499</span>
                    </div>
                  </div>
                  <div className="pricing-body">
                    <ul>
                      <li>house cleaning</li>
                      <li>furniture cleaning</li>
                      <li>bathroom cleaning</li>
                      <li>window cleaning</li>
                    </ul>
                  </div>
                  <div className="pricing-footer">
                    <a href="#" className="btn">
                      get started
                    </a>
                  </div>
                </div>
                {/* standard plan end */}
                {/* premium plan start */}
                <div className="pricing-item">
                  <div className="pricing-header">
                    <h3>premium</h3>
                    <div className="price">
                      <span>$899</span>
                    </div>
                  </div>
                  <div className="pricing-body">
                    <ul>
                      <li>house cleaning</li>
                      <li>furniture cleaning</li>
                      <li>bathroom cleaning</li>
                      <li>window cleaning</li>
                    </ul>
                  </div>
                  <div className="pricing-footer">
                    <a href="#" className="btn">
                      get started
                    </a>
                  </div>
                </div>
                {/* premium plan end */}
              </div>
            </div>
          </section>
          {/* pricing section end */}
          {/* contact section start */}
          <section className="contact section-padding" id="contact">
            <div className="container">
              <div className="section-title">
                <span className="title">contact us</span>
                <h2 className="sub-title">have any question</h2>
              </div>
              <div className="grid contact-grid">
                <div className="contact-info">
                  <div className="contact-info-item">
                    <img src={address} alt="img" />
                    <h3>Address</h3>
                    <p>Block-A, sec-75, Trichy road, Dindigul</p>
                  </div>
                  <div className="contact-info-item">
                    <img src={phone} alt="img" />
                    <h3>Call us</h3>
                    <p>9654 2654 87</p>
                  </div>
                  <div className="contact-info-item">
                    <img src={mail} alt="img" />
                    <h3>Email us</h3>
                    <p>info@gmail.com</p>
                  </div>
                </div>
                <div className="contact-form">
                  <form>
                    <div className="input-box">
                      <input
                        type="text"
                        placeholder="Name"
                        className="input-control"
                        required
                      />
                    </div>
                    <div className="input-box">
                      <input
                        type="text"
                        placeholder="Email"
                        className="input-control"
                        required
                      />
                    </div>
                    <div className="input-box">
                      <input
                        type="text"
                        placeholder="Phone"
                        className="input-control"
                        required
                      />
                    </div>
                    <div className="input-box">
                      <textarea
                        type="text"
                        placeholder="Message"
                        className="input-control"
                        required
                      />
                    </div>
                    <div className="btn-wrap">
                      <button type="submit" className="btn">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          {/* contact section end */}
          {/*footer start 
          <footer className="footer">
            
          </footer>
  footer end */}
        </div>
      </div>
    </div>
  );
};

export default cleaningservices;
