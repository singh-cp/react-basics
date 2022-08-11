import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          React Router5
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/post/iamid">
                Post Param
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/post/iamid?name=cp&surname=singh">
                Post Query Param
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/secure">
                Secure
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
}
<h1>I am a Header</h1>;
export default Header;
