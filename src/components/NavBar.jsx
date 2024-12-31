import React from "react";
import logo from "../assets/logo.png"; // Substitua pelo caminho correto da sua imagem

import "../styles/NavBar.css"; // Certifique-se de que o caminho esteja correto

function NavBar() {
  return (
    <nav id="navBar">
      <img src={logo} alt="Logo" />
      <h1>Alexandria</h1>
    </nav>
  );
}

export default NavBar;
 