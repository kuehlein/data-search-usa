import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ColumnFilterTemplate from "../Templates/ColumnFilterTemplate";

import {
  clearCurrentFilterOptions,
  clearWhereStatements
} from "../../../../store";

// template for column filter iteration
class ColumnSelectionTemplate extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.currentTable !== nextProps.currentTable) {
      this.props.clearCurrentFilterOptions();
      this.props.clearWhereStatements();
    }
  }

  render() {
    const {
      currentColumns,
      whereStatements,
      handleChange,
      handleInputChange
    } = this.props;

    return whereStatements.map((statement, i) => (
      <ColumnFilterTemplate
        key={i}
        value={statement}
        currentColumns={currentColumns}
        handleChange={handleChange}
        handleInputChange={handleInputChange}
      />
    ));
  }
}
ColumnSelectionTemplate.defaultProps = {
  whereStatements: [{}],
  currentTable: "",
  currentColumns: [""],
  clearCurrentFilterOptions: () => {},
  clearWhereStatements: () => {},
  handleChange: () => {},
  handleInputChange: () => {}
};

ColumnSelectionTemplate.propTypes = {
  whereStatements: PropTypes.arrayOf(PropTypes.object),
  currentTable: PropTypes.string,
  currentColumns: PropTypes.arrayOf(PropTypes.string),
  clearCurrentFilterOptions: PropTypes.func,
  clearWhereStatements: PropTypes.func,
  handleChange: PropTypes.func,
  handleInputChange: PropTypes.func
};

const mapStateToProps = state => ({
  currentTable: state.currentTable,
  whereStatements: state.whereStatements,
  currentColumns: state.currentColumns
});

const mapDispatchToProps = dispatch => ({
  clearCurrentFilterOptions: () => dispatch(clearCurrentFilterOptions()),
  clearWhereStatements: () => dispatch(clearWhereStatements())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColumnSelectionTemplate);
