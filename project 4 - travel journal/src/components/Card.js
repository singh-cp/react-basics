import React from "react";
function Card(props) {
  return (
    <div className="card-padding">
      <div className="card">
        <div className="card-img">
          <img src={props.cardData.img} alt="Location" />
        </div>
        <div className="card-detail">
          <div className="card-location">
            <p className="country">
              <i className="fa-solid fa-location-dot"></i>{" "}
              {props.cardData.country}
            </p>
            <a href={props.cardData.g_link} className="google-link" target="_">
              View on Google Maps
            </a>
          </div>
          <div>
            <h2 className="card-heading">{props.cardData.location}</h2>
          </div>
          <div className="card-about">
            <p className="card-dates">
              {props.cardData.from_date} - {props.cardData.to_date}
            </p>
            <p className="card-description">{props.cardData.about}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
