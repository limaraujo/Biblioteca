import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar.jsx"; 
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <Router>
      <NavBar /> 
      <div style={{ paddingTop: '10px' }}></div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
