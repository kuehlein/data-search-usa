import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./Panel.css";

import TableSelection from "./PanelSections/TableSelection";
import OptionsSelection from "./PanelSections/OptionsSelection";
import FilterDisplay from "./PanelSections/FilterDisplay";
import ManageFilters from "./PanelSections/ManageFilters";

import GoButton from "./PanelToggles/GoButton";

import { fields } from "./IterableContent/fieldTemplate";
import { fetchTable } from "../../store";

// the presentaional component for the control panel
class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [""],
      filterNum: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    this.setState({ filterNum: ++this.state.filterNum });
  }

  handleChange(event) {
    const { columns } = this.state;
    this.setState({ columns: columns.concat(event.target.value) });
  }

  render() {
    const {
      fetchTable,
      currentTable,
      currentColumns,
      currentFilterOptions,
      whereStatements
    } = this.props;

    return (
      <div
        className="jumbotron btn-group container-fluid flex-column pt-4"
        role="group"
      >
        <TableSelection />
        <FilterDisplay fields={fields} />
        <OptionsSelection />

        <ManageFilters
          handleClick={this.handleClick}
          handleChange={this.handleChange}
          currentColumns={currentColumns}
          columns={this.state.columns}
          filterNum={this.state.filterNum}
        />

        <GoButton
          fetchTable={fetchTable}
          currentTable={currentTable}
          currentColumns={currentColumns}
          currentFilterOptions={currentFilterOptions}
          whereStatements={whereStatements}
        />
      </div>
    );
  }
}
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
