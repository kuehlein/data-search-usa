import React from "react";
import "./Panel.css";

import TableSelection from "./TableSelection";
import OptionsSelection from "./OptionsSelection";
import FilterDisplay from "./FilterDisplay";

import { fields, where } from "./IterableContent/fieldTemplate";

// the presentaional component for the control panel
const Panel = () => (
  <div
    className="jumbotron btn-group container-fluid flex-column pt-4"
    role="group"
  >
    <TableSelection />
    <FilterDisplay fields={fields} />
    <OptionsSelection />
    <FilterDisplay where={where} />
    {/* add another? */}
    {/* Go! */}
  </div>
);

export default Panel;
