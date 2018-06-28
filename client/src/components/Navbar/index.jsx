import React from "react";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar fixed-top navbar-expand navbar-dark bg-dark flex-row">
    <a className="navbar-brand text-danger" href="#">
      DATAUSA
    </a>
    <button className="navbar-toggler" type="button">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link text-primary" href="#">
            Home <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-primary" href="#">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-primary" href="#">
            Pricing
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
