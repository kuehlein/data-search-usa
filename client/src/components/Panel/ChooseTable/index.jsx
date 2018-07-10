import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  fetchPanelInitial,
  setCurrentTable,
  chooseVisibilityFilterTable,
  clearCurrentOptions
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

  // sets the attribute that the user selects
  handleChange(event) {
    const {
      setCurrentTable,
      clearCurrentOptions,
      chooseVisibilityFilterTable
    } = this.props;
    const { value } = event.target;

    setCurrentTable(value);
    clearCurrentOptions();
    chooseVisibilityFilterTable(!!value);
  }

  render() {
    const { allTables } = this.props;

    return (
      <TableSelect handleChange={this.handleChange} allTables={allTables} />
    );
  }
}
ChooseTable.defaultProps = {
  setCurrentTable: "",
  allTables: [],
  fetchPanelInitial: () => {},
  chooseVisibilityFilterTable: () => {},
  clearCurrentOptions: () => {}
};

ChooseTable.propTypes = {
  setCurrentTable: PropTypes.func,
  allTables: PropTypes.arrayOf(PropTypes.string),
  fetchPanelInitial: PropTypes.func,
  chooseVisibilityFilterTable: PropTypes.func,
  clearCurrentOptions: PropTypes.func
};

const mapStateToProps = state => ({
  allTables: state.allTables
});

const mapDispatchToProps = dispatch => ({
  setCurrentTable: currentTable => dispatch(setCurrentTable(currentTable)),
  fetchPanelInitial: () => dispatch(fetchPanelInitial()),
  chooseVisibilityFilterTable: visibility =>
    dispatch(chooseVisibilityFilterTable(visibility)),
  clearCurrentOptions: () => dispatch(clearCurrentOptions())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChooseTable);
