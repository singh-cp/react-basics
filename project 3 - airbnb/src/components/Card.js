import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <div className="profile-pic">
        <img src={props.img} alt="" />
        <button className="status-button">{props.status}</button>
      </div>
      <div>
        <p className="rating">
          <i class="fa-solid fa-star"></i> {props.rating}
          <span className="rating-light">
            ({props.reviews}) .{props.country}
          </span>
        </p>
        <p className="experience-title">{props.title}</p>
        <p className="experience-price">
          <span className="per-person">From ${props.price}</span> / person
        </p>
      </div>
    </div>
  );
}
