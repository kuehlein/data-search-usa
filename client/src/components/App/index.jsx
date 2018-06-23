import React from "react";
import { connect } from "react-redux";

import "./App.css";
import { Panel, Map } from "../index";

const App = () => (
  <div className="App">
    <Panel />
    <Map />
  </div>
);

export default connect(null)(App);

// create a template to simulate content while requests are loading
