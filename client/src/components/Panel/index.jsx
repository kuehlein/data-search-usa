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
  const { fetchTable, currentTable, currentColumns } = props;

  console.log("panel", currentColumns);

  return (
    <div
      className="jumbotron btn-group container-fluid flex-column pt-4"
      role="group"
    >
      <TableSelection />
      <FilterDisplay fields={fields} />
      <OptionsSelection />
      <FilterDisplay where={where} />

      {/* add another? */}

      <GoButton
        fetchTable={fetchTable}
        currentTable={currentTable}
        currentColumns={currentColumns}
      />
    </div>
  );
};
Panel.defaultProps = {
  fetchTable: () => {},
  currentTable: "",
  currentColumns: []
};

Panel.propTypes = {
  fetchTable: PropTypes.func,
  currentTable: PropTypes.string,
  currentColumns: PropTypes.arrayOf(PropTypes.string)
};

const mapStateToProps = state => ({
  currentTable: state.currentTable,
  currentColumns: state.currentColumns
});

const mapDispatchToProps = dispatch => ({
  fetchTable: () => dispatch(fetchTable())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Panel);
