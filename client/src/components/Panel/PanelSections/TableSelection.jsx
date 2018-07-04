import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import MapButtons from "../IterableContent/MapButtons";
import { setCurrentTable, fetchPanelInitial } from "../../../store";

// Request available tables from the api and display the options as buttons
class TableSelection extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchPanelInitial();
  }

  handleClick(type) {
    this.props.setCurrentTable(type);
  }

  render() {
    const { allTables } = this.props;

    return <MapButtons handleClick={this.handleClick} allTables={allTables} />;
  }
}
TableSelection.defaultProps = {
  setCurrentTable: "",
  allTables: [],
  fetchPanelInitial: () => {}
};

TableSelection.propTypes = {
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
)(TableSelection);
