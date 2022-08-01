import "./Mycss.css";
import React from "react";
import Navbar from "./Components/Navbar";
import Data from "./Data";
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
    <div className="app">
      <Navbar />
      <div className="Container">{Cards}</div>
    </div>
  );
}
