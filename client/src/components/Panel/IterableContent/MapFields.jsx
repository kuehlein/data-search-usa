import React from "react";
import PropTypes from "prop-types";
import MapSelect from "./MapSelect";

// map out filter fields
const MapFields = props => {
  const { /* handleClick, */ template } = props;

  return (
    <div>
      {template &&
        template.map(field => (
          <div key={field.name}>
            <MapSelect field={field} />
          </div>
        ))}
    </div>
  );
};
MapFields.defaultProps = {
  /* handleClick: () => {}, */
  template: [{}]
};

MapFields.propTypes = {
  /* handleClick: PropTypes.func, */
  template: PropTypes.arrayOf(PropTypes.object)
};

export default MapFields;

// onChange
