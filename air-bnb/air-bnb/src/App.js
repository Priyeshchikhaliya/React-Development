import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Data from "./data";
import Card from "./Components/Card";

export default function App() {
  const Cards = Data.map((Cont) => {
    return (
      <Card
        Cont={Cont}
      />
    );
  });
  return (
    <div> 
      <Navbar />
      <Hero />
      <div className="Container">{Cards}</div>
    </div>
  );
}
