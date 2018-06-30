import React from "react";
import PropTypes from "prop-types";
import MapSelect from "./MapSelect";

// map out filter fields
const MapFields = props => {
  const { handleChange, template, currentTable } = props;

  return (
    <div>
      {template &&
        template.map(field => (
          <div key={field.name}>
            <MapSelect
              field={field}
              handleChange={handleChange}
              currentTable={currentTable}
            />
          </div>
        ))}
    </div>
  );
};
MapFields.defaultProps = {
  handleChange: () => {},
  template: [{}],
  currentTable: ""
};

MapFields.propTypes = {
  handleChange: PropTypes.func,
  template: PropTypes.arrayOf(PropTypes.object),
  currentTable: PropTypes.string
};

export default MapFields;
