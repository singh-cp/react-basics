import React from "react";
import myPic from "../images/profile-pic.jpg";
import Info from "./Info";
import Social from "./Social";

export default function Profile() {
  return (
    <div className="main">
      <div className="profile-header">
        <img src={myPic} alt="" className="profile-img" />
        <div>
          <h1 className="profile-name">Laura Smith</h1>
          <p className="profile-designation">Frontend Developer</p>
          <a className="profile-link" href="#">
            laurasmith.website
          </a>
        </div>
        <div className="contact-buttons">
          <button className="button email">
            <i class="fa-solid fa-envelope"></i> Email
          </button>
          <button className="button linkedin">
            <i class="fa-brands fa-linkedin"></i> LinkedIn
          </button>
        </div>
        <Info />
        <Social />
      </div>
    </div>
  );
}
