import React from "react";
import PropTypes from "prop-types";
import MapSelect from "./MapSelect";

// map out filter fields
const MapFields = props => {
  const { template, column } = props;

  return (
    <div>
      {template &&
        template.map((field, i) => (
          <div key={i}>
            <MapSelect field={field} column={column} />
          </div>
        ))}
    </div>
  );
};
MapFields.defaultProps = {
  template: [{}],
  column: ""
};

MapFields.propTypes = {
  template: PropTypes.arrayOf(PropTypes.object),
  column: PropTypes.string
};

export default MapFields;
