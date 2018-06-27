import React from "react";

import OptionsSelection from "./OptionsSelection";
import TableSelection from "./TableSelection";

const ButtonDisplay = () => (
  <div className="btn-group container-fluid flex-column pt-4" role="group">
    <TableSelection />
    <hr />
    <OptionsSelection />
  </div>
);

export default ButtonDisplay;
