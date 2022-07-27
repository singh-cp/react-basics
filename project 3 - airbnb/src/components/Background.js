import React from "react";
import backgroundImg from "../images/background-picture.png";

export default function Background() {
  return (
    <div className="background-img">
      <img src={backgroundImg} alt="background image" />
    </div>
  );
}
