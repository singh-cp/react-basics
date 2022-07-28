import React from "react";
import Card from "./Card";
import profilePic from "../images/profile-1.png";
import profilePic2 from "../images/profile-2.jpg";

export default function Main() {
  return (
    <div className="main">
      <div className="heading">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
      <div className="cards">
        <Card
          img={profilePic}
          status="Sold Out"
          rating={5.0}
          reviews={6}
          country="USA"
          title="Life lessons with Katie Zaferes"
          price={136}
        />
        <Card
          img={profilePic2}
          status="Online"
          rating={5.0}
          reviews={30}
          country="USA"
          title="Learn wedding photography"
          price={126}
        />
      </div>
    </div>
  );
}
