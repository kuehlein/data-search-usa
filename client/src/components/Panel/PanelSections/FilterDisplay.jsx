import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import MapFields from "../IterableContent/MapFields";

import { newWhereColumn, clearFilterOptions } from "../../../store";

// filter options for a table query
class FilterDisplay extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.column !== nextProps.column) {
      this.props.newWhereColumn(nextProps.column);
    }

    if (nextProps.currentOptions === "THIS TABLE IS CURRENTLY UNAVAILABLE") {
      this.props.clearFilterOptions();
    }
  }

  render() {
    const { currentOptions, filterOptions, fields, where, column } = this.props;
    const { otherTables, sumlevel, year } = filterOptions;
    const propsAvailable = where.length
      ? where
      : fields(otherTables, currentOptions, sumlevel, year);

    return (
      <div className="d-flex flex-column justify-content-center">
        <MapFields template={propsAvailable} column={column} />
      </div>
    );
  }
}
FilterDisplay.defaultProps = {
  currentOptions: [],
  filterOptions: {},
  fields: () => {},
  where: [],
  column: "",
  newWhereColumn: () => {},
  clearFilterOptions: () => {}
};

FilterDisplay.propTypes = {
  currentOptions: PropTypes.arrayOf(PropTypes.string),
  filterOptions: PropTypes.objectOf(PropTypes.any),
  fields: PropTypes.any,
  where: PropTypes.arrayOf(PropTypes.object),
  column: PropTypes.string,
  newWhereColumn: PropTypes.func,
  clearFilterOptions: PropTypes.func
};

const mapStateToProps = state => ({
  currentOptions: state.currentOptions,
  filterOptions: state.filterOptions
});

const mapDispatchToProps = dispatch => ({
  newWhereColumn: column => dispatch(newWhereColumn(column)),
  clearFilterOptions: () => dispatch(clearFilterOptions())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterDisplay);
