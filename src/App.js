import React from "react";
import "./App.css";

import Cleaningservices from "./components/Cleaningservices";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" component={Cleaningservices} />
          <Route exact path="/about" component={About} />
          <Navigate to="/" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
