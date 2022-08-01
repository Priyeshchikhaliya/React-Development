import React from "react";
import "../Mycss.css";
import "../App";
export default function Card(props) {
  return (
    <div className="Card">
      <div className="image">
        <img
          src={props.Cont.imageUrl}
          alt="card-image"
          className="card-image "
        />
      </div>

      <div className="container">
        <p className="location">⚓{props.Cont.location}</p>

        <p className="Title">{props.Cont.title}</p>
        <div className="date">
          <p className="card-date">
            {props.Cont.startDate}-{props.Cont.endDate}
          </p>
        </div>
        <div className="desc">
          <p className="card-description">{props.Cont.description}</p>
        </div>
      </div>
    </div>
  );
}
