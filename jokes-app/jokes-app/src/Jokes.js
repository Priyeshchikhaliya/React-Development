import React from "react";
import "./index.css";

export default function Jokes(props) {
  return (
    <div className="Jokes">
      <h1>{props.setup}</h1>
      <p>{props.punchline}</p>
      <hr></hr>
    </div>
  );
}
