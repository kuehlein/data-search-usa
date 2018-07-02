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

import {
  fetchTable,
  clearCurrentFilterOptions,
  clearWhereStatements
} from "../../store";
import { filterStateArr } from "../../utils";

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

  componentWillReceiveProps(nextProps) {
    if (this.props.currentTable !== nextProps.currentTable) {
      this.setState({
        columns: [""],
        filterNum: 0
      });
      this.props.clearCurrentFilterOptions();
      this.props.clearWhereStatements();
    }
  }

  handleClick(canClick) {
    let numCopy = this.state.filterNum;

    if (!canClick) {
      this.setState({ filterNum: ++numCopy });
    }
  }

  handleChange(event, currentValue) {
    const { columns, filterNum } = this.state;
    const { value } = event.target;
    const newColumns = filterStateArr(columns, value, currentValue);

    this.setState({ columns: newColumns });

    if (columns.length > newColumns.length) {
      let numCopy = filterNum;
      this.setState({ filterNum: --numCopy });
    }
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
  whereStatements: {},
  clearCurrentFilterOptions: () => {},
  clearWhereStatements: () => {}
};

Panel.propTypes = {
  fetchTable: PropTypes.func,
  currentTable: PropTypes.string,
  currentColumns: PropTypes.arrayOf(PropTypes.string),
  currentFilterOptions: PropTypes.objectOf(PropTypes.any),
  whereStatements: PropTypes.objectOf(PropTypes.object),
  clearCurrentFilterOptions: PropTypes.func,
  clearWhereStatements: PropTypes.func
};

const mapStateToProps = state => ({
  currentTable: state.currentTable,
  currentColumns: state.currentColumns,
  currentFilterOptions: state.currentFilterOptions,
  whereStatements: state.whereStatements
});

const mapDispatchToProps = dispatch => ({
  fetchTable: (table, columns, filters, statements) =>
    dispatch(fetchTable(table, columns, filters, statements)),
  clearCurrentFilterOptions: () => dispatch(clearCurrentFilterOptions()),
  clearWhereStatements: () => dispatch(clearWhereStatements())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Panel);
