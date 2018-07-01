import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import MapFields from "./IterableContent/MapFields";

// filter options for a table query
const FilterDisplay = props => {
  const { currentOptions, filterOptions, fields, where } = props;
  const { otherTables, sumlevel, year } = filterOptions;
  const propsAvailable =
    typeof fields === "function"
      ? fields(otherTables, currentOptions, sumlevel, year)
      : where;

  return (
    <div className="d-flex flex-column justify-content-center">
      <MapFields template={propsAvailable} />
    </div>
  );
};
FilterDisplay.defaultProps = {
  currentOptions: [],
  filterOptions: {},
  fields: () => {},
  where: []
};

FilterDisplay.propTypes = {
  currentOptions: PropTypes.arrayOf(PropTypes.string),
  filterOptions: PropTypes.objectOf(PropTypes.any),
  fields: PropTypes.any,
  where: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = state => ({
  currentOptions: state.currentOptions,
  filterOptions: state.filterOptions
});

export default connect(mapStateToProps)(FilterDisplay);
