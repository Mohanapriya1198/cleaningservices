import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cleaningservices from "./components/Cleaningservices";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Router>
        <Cleaningservices />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
