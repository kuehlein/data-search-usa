import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  fetchPanelInitial,
  setCurrentTable,
  chooseVisibilityFilterTable,
  clearCurrentOptions,
  hideAll
} from "../../../store";
import TableSelect from "./TableSelect";

// Request available tables from the api and display the options as buttons
class ChooseTable extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  /*
   * fetches the attributes and all variables for all attributes for the user to request
   *   -sets: allTables, allOptions
   */
  componentDidMount() {
    this.props.fetchPanelInitial();
  }

  componentWillReceiveProps(nextProps) {
    const { chooseVisibilityFilterTable, hideAll } = this.props;

    if (nextProps.currentOptions[0] === "THIS TABLE IS CURRENTLY UNAVAILABLE") {
      hideAll();
    } else {
      chooseVisibilityFilterTable(!!nextProps.currentTable);
    }
  }

  // sets the attribute that the user selects
  handleChange(event) {
    const { setCurrentTable, clearCurrentOptions } = this.props;
    const { value } = event.target;

    setCurrentTable(value);
    clearCurrentOptions();
  }

  render() {
    const { allTables } = this.props;

    return (
      <TableSelect handleChange={this.handleChange} allTables={allTables} />
    );
  }
}
ChooseTable.defaultProps = {
  allTables: [],
  currentOptions: [""],
  currentTable: PropTypes.string,
  setCurrentTable: () => {},
  fetchPanelInitial: () => {},
  chooseVisibilityFilterTable: () => {},
  clearCurrentOptions: () => {},
  hideAll: () => {}
};

ChooseTable.propTypes = {
  allTables: PropTypes.arrayOf(PropTypes.string),
  currentOptions: PropTypes.arrayOf(PropTypes.string),
  currentTable: PropTypes.string,
  setCurrentTable: PropTypes.func,
  fetchPanelInitial: PropTypes.func,
  chooseVisibilityFilterTable: PropTypes.func,
  clearCurrentOptions: PropTypes.func,
  hideAll: PropTypes.func
};

const mapStateToProps = state => ({
  allTables: state.allTables,
  currentOptions: state.currentOptions,
  currentTable: state.currentTable
});

const mapDispatchToProps = dispatch => ({
  setCurrentTable: currentTable => dispatch(setCurrentTable(currentTable)),
  fetchPanelInitial: () => dispatch(fetchPanelInitial()),
  chooseVisibilityFilterTable: visibility =>
    dispatch(chooseVisibilityFilterTable(visibility)),
  clearCurrentOptions: () => dispatch(clearCurrentOptions()),
  hideAll: () => dispatch(hideAll())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChooseTable);
