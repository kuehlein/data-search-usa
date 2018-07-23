import React from "react";

import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => (
  <nav className="navbar nav-display fixed-top navbar-expand navbar-dark bg-dark flex-row">
    <img src={logo} alt="logo" className="logo" />
    <div className="nav-text">data search usa</div>
  </nav>
);

export default Navbar;
