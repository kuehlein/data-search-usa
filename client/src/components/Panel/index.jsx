import React from "react";
import "./Panel.css";

import ChooseTable from "./ChooseTable";
import FilterTable from "./FilterTable";
import ChooseColumns from "./ChooseColumns";
import FilterColumns from "./FilterColumns";
import GoButton from "./GoButton";

// the presentaional component for the control panel
const Panel = () => (
  <div
    className="jumbotron btn-group container-fluid flex-column pt-4"
    role="group"
  >
    <ChooseTable />
    <FilterTable />
    <ChooseColumns />
    <FilterColumns />
    <GoButton />
  </div>
);

export default Panel;
