import React from "react";
import trollFace from "../images/Troll-Face.png";

function Header() {
  return (
    <div>
      <header className="header">
        <img src={trollFace} alt="" className="troll-face" />
        <p>MemeGenerator</p>
      </header>
    </div>
  );
}

export default Header;
