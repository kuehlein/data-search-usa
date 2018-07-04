import React from "react";
import PropTypes from "prop-types";
import FilterFields from "./FilterFields";

// map out filter fields
const MapFields = props => {
  const { template } = props;

  return (
    <div>
      {template &&
        template.map((field, i) => <FilterFields key={i} field={field} />)}
    </div>
  );
};
MapFields.defaultProps = {
  template: [{}]
};

MapFields.propTypes = {
  template: PropTypes.arrayOf(PropTypes.object)
};

export default MapFields;
