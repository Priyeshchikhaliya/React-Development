import Photo from "../images/Photo.png";
import React from "react";
import "../Mycss.css";

export default function Hero() {
  return (
    <div>
      <img src={Photo} alt="Hero" className="Hero" />
      <h1>Online Experiences.</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}
