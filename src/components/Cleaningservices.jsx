import React from "react";

import "./Cleaningservices.css";
import { Link } from "react-router-dom";

import home from "../Images/home img.jpg";
import about from "../Images/about img.jpg";
import house from "../Images/house img.jpg";
import party from "../Images/party.jpg";
import school from "../Images/school.jpg";
import bathroom from "../Images/bathroom img.jpg";
import address from "../Images/address.png";
import phone from "../Images/phone.png";
import mail from "../Images/mail.png";
import wind from "../Images/window.jpg";

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
              {/* <button type="button" className="nav-toggle js-nav-toggler">
                <span></span>
              </button> */}
              <nav className="nav js-nav">
                <ul className="list">
                  <li>home</li>

                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>services</li>
                  <li>pricing</li>
                  <li>contact</li>
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
          {/* <section className="about section-padding" id="about">
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
                    <h2 className="sub-title">we're cleaning services</h2>
                  </div>
                  <p>vhdgwhvdwhguwgyuegdyrgfyugryggrgr</p>
                </div>
              </div>
            </div>
          </section> */}
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
                  <h3>deep cleaning</h3>
                </div>
                {/* services item end */}
                {/* services item start */}
                <div className="services-item">
                  <div className="img-box">
                    <img src={school} alt="img" />
                  </div>
                  <h3>schools & hospitals cleaning</h3>
                </div>
                {/* services item end */}

                {/* services item start */}
                <div className="services-item">
                  <div className="img-box">
                    <img src={house} alt="img" />
                  </div>
                  <h3>residental cleaning</h3>
                </div>
                {/* services item end */}

                {/* services item start */}
                <div className="services-item">
                  <div className="img-box">
                    <img src={wind} alt="img" />
                  </div>
                  <h3>office cleaning</h3>
                </div>
                {/* services item end */}
                {/* services item start */}
                <div className="services-item">
                  <div className="img-box">
                    <img src={party} alt="img" />
                  </div>
                  <h3>party help</h3>
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
              <div className="grid ">
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
                      <li>deep cleaning</li>
                      <li>school & hospital cleaning</li>
                      <li>residential cleaning</li>
                      <li>office cleaning</li>
                      <li>party help</li>
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
                      <li>deep cleaning</li>
                      <li>school & hospital cleaning</li>
                      <li>residential cleaning</li>
                      <li>office cleaning</li>
                      <li>party help</li>
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
                      <li>deep cleaning</li>
                      <li>school & hospital cleaning</li>
                      <li>residential cleaning</li>
                      <li>office cleaning</li>
                      <li>party help</li>
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
                    <p>
                      P.O.Box:62456, Shop No.12, Dasti Building 5,AI
                      Karama,U.A.E.
                    </p>
                  </div>
                  <div className="contact-info-item">
                    <img src={phone} alt="img" />
                    <h3>Call us</h3>
                    <p>050 460 0646</p>
                    <p>052 376 2629</p>
                  </div>
                  <div className="contact-info-item">
                    <img src={mail} alt="img" />
                    <h3>Email us</h3>
                    <p>newemerald30@gmail.com</p>
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

export default Cleaningservices;
