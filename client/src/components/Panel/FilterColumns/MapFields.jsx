import React from "react";
import PropTypes from "prop-types";
import MapInput from "./MapInput";

// map out filter fields
const MapFields = props => {
  const { template, column, disable } = props;

  return (
    <div>
      {template &&
        template.map((field, i) => (
          <div key={i}>
            <MapInput field={field} column={column} disable={disable} />
          </div>
        ))}
    </div>
  );
};
MapFields.defaultProps = {
  template: [{}],
  column: "",
  disable: true
};

MapFields.propTypes = {
  template: PropTypes.arrayOf(PropTypes.object),
  column: PropTypes.string,
  disable: PropTypes.bool
};

export default MapFields;
