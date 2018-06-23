import React from "react";
import { connect } from "react-redux";

import OptionsSelection from "./OptionsSelection";
import TableSelection from "./TableSelection";

const ButtonDisplay = () => (
  <div>
    <TableSelection />
    <hr />
    <OptionsSelection />
  </div>
);

export default connect(null)(ButtonDisplay);

// save buttons to db and retrieve their names
