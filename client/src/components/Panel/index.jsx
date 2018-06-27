import React from "react";
import logo from "../../assets/logo.svg";
import "./Panel.css";

import ButtonDisplay from "./ButtonDisplay";

// the presentaional component for the control panel
const Panel = () => (
  <div className="jumbotron">
    {/* <img src={logo} className="App-logo" alt="logo" /> */}

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

    <ButtonDisplay />
  </div>
);

export default Panel;

// apply "disabled" to currently in use tab
