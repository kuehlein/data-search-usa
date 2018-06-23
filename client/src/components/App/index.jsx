import React from "react";

import "./App.css";
import { Panel, Map } from "../index";

// the main component of the app
const App = () => (
  <div className="App">
    <Panel />
    <Map />
  </div>
);

export default App;

// create a template to simulate content while requests are loading
