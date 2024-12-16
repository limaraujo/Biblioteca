import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar.jsx"; 
import GenreSelection from "./pages/escolha_generos";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <Router>
      <NavBar /> 
      <div style={{ paddingTop: '10px' }}></div>
      <Routes>
        <Route path="/" element={<GenreSelection />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
