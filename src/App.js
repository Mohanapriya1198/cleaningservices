import React from "react";
import "./App.css";

import Cleaningservices from "./components/Cleaningservices";
import About from "./components/About";
import Home from "./components/Home";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <>
    //   <Cleaningservices />
    //   <About />
    //   <Home />
    //   <Services />
    //   <Pricing />
    //   <Contact />
    // </>
    <>
      <Router>
        <Cleaningservices />
        <Routes>
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/contact" component={Contact} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
