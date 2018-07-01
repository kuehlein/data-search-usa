import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./Panel.css";

import TableSelection from "./TableSelection";
import OptionsSelection from "./OptionsSelection";
import FilterDisplay from "./FilterDisplay";
import GoButton from "./GoButton";

import { fields, where } from "./IterableContent/fieldTemplate";
import { fetchTable } from "../../store";

// the presentaional component for the control panel
const Panel = props => {
  const {
    fetchTable,
    currentTable,
    currentColumns,
    currentFilterOptions,
    whereStatements
  } = props;

  return (
    <div
      className="jumbotron btn-group container-fluid flex-column pt-4"
      role="group"
    >
      <TableSelection />
      <FilterDisplay fields={fields} />
      <OptionsSelection />

      {/* choose a column to filter? */}
      <FilterDisplay where={where} />
      {/* add another? */}

      <GoButton
        fetchTable={fetchTable}
        currentTable={currentTable}
        currentColumns={currentColumns}
        currentFilterOptions={currentFilterOptions}
        whereStatements={whereStatements}
      />
    </div>
  );
};
Panel.defaultProps = {
  fetchTable: () => {},
  currentTable: "",
  currentColumns: [],
  currentFilterOptions: {},
  whereStatements: {}
};

Panel.propTypes = {
  fetchTable: PropTypes.func,
  currentTable: PropTypes.string,
  currentColumns: PropTypes.arrayOf(PropTypes.string),
  currentFilterOptions: PropTypes.objectOf(PropTypes.any),
  whereStatements: PropTypes.objectOf(PropTypes.object)
};

const mapStateToProps = state => ({
  currentTable: state.currentTable,
  currentColumns: state.currentColumns,
  currentFilterOptions: state.currentFilterOptions,
  whereStatements: state.whereStatements
});

const mapDispatchToProps = dispatch => ({
  fetchTable: (table, columns) => dispatch(fetchTable(table, columns))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Panel);

/*
 * set up requests with filters
 *    -allow state to be updated
 *    -adjust route accordingly
 *
 * make "filter another column" button
 *    -can multiple columns be filtered at once?
 *
*/
