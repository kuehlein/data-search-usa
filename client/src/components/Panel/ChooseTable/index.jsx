import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { fetchPanelInitial, setCurrentTable } from "../../../store";
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
    this.props.setCurrentTable(event.target.value);
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
  fetchPanelInitial: () => {}
};

ChooseTable.propTypes = {
  setCurrentTable: PropTypes.func,
  allTables: PropTypes.arrayOf(PropTypes.string),
  fetchPanelInitial: PropTypes.func
};

const mapStateToProps = state => ({
  allTables: state.allTables
});

const mapDispatchToProps = dispatch => ({
  setCurrentTable: currentTable => dispatch(setCurrentTable(currentTable)),
  fetchPanelInitial: () => dispatch(fetchPanelInitial())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChooseTable);
