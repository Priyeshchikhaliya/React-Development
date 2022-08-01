import React from "react";
import "../Mycss.css";
import "../App";
import star from "../images/star.png"
export default function Card(props) {
  
  let badgeText
    if (props.Cont.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.Cont.location === "Online") {
        badgeText = "ONLINE"
    }
  return (
    <div className="Card">
      {badgeText && <div className="badge">{badgeText}</div>}
      <img src={props.Cont.coverImg} alt="CoverImage" className="Card1 " />
      <div className="card--stats">
        <img src={star} alt="Star" className="card--star" />
        <span>{props.Cont.stats.rating}</span>
        <span className="gray">({props.Cont.stats.reviewCount}) • </span>
        <span className="gray">{props.Cont.location}</span>
      </div>
      <p className="Title">{props.Cont.title}</p>
      <p>
        <span className="bold">From ${props.Cont.price}</span> / person
      </p>
    </div>
  );
}
