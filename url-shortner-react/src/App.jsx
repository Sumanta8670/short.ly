import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./component/LandingPage.jsx";
import AboutPage from "./component/AboutPage.jsx";
import "./index.css";
import NavBar from "./component/NavBar.jsx";
import Footer from "./component/Footer.jsx";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
