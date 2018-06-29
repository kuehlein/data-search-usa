import React from "react";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar fixed-top navbar-expand navbar-dark bg-dark flex-row">
    <div className="navbar-brand text-danger">DATAUSA</div>
    <button className="navbar-toggler" type="button">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <div className="nav-link text-primary">
            Home <span className="sr-only">(current)</span>
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-link text-primary">Features</div>
        </li>
        <li className="nav-item">
          <div className="nav-link text-primary">Pricing</div>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
