import React from "react";
import "./Mycss.css";
import logo from "./images/troll-face.png"

export default function Navbar() {
  return (
      <nav className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="navbar-title">Meme Generator</h1>
        <h3 className="navbar-project">React Course - Project 3</h3>
      </nav>
  );
}
