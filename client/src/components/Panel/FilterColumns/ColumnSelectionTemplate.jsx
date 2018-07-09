import { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ColumnFilterTemplate from "./Templates/ColumnFilterTemplate";

import mapFilterTemplate from "./utils.jsx";
import {
  clearCurrentFilterOptions,
  clearWhereStatements,
  newWhereStatement,
  updateColumn
} from "../../../store";

// template for column filter iteration
class ColumnSelectionTemplate extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentTable !== nextProps.currentTable) {
      this.props.clearCurrentFilterOptions();
      this.props.clearWhereStatements();
    }
  }

  handleChange(event, currentValue) {
    this.props.updateColumn(currentValue, event.target.value);
  }

  handleInputChange(event, field, column) {
    this.props.newWhereStatement(column, field, event.target.value);
  }

  render() {
    const {
      currentColumns,
      whereStatements,
      clicked,
      handleColumnValue,
      handleNewFilterColumn,
      shouldDisable
    } = this.props;

    return mapFilterTemplate(
      ColumnFilterTemplate,
      whereStatements,
      clicked,
      shouldDisable,
      currentColumns,
      this.handleChange,
      this.handleInputChange,
      handleColumnValue,
      handleNewFilterColumn
    );
  }
}
ColumnSelectionTemplate.defaultProps = {
  clicked: false,
  handleColumnValue: () => {},
  handleNewFilterColumn: () => {},
  whereStatements: [{}],
  currentTable: "",
  currentColumns: [""],
  newWhereStatement: () => {},
  clearCurrentFilterOptions: () => {},
  clearWhereStatements: () => {},
  updateColumn: () => {},
  shouldDisable: true
};

ColumnSelectionTemplate.propTypes = {
  clicked: PropTypes.bool,
  handleColumnValue: PropTypes.func,
  handleNewFilterColumn: PropTypes.func,
  whereStatements: PropTypes.arrayOf(PropTypes.object),
  currentTable: PropTypes.string,
  currentColumns: PropTypes.arrayOf(PropTypes.string),
  newWhereStatement: PropTypes.func,
  clearCurrentFilterOptions: PropTypes.func,
  clearWhereStatements: PropTypes.func,
  updateColumn: PropTypes.func,
  shouldDisable: PropTypes.bool
};

const mapStateToProps = state => ({
  currentTable: state.currentTable,
  whereStatements: state.whereStatements,
  currentColumns: state.currentColumns
});

const mapDispatchToProps = dispatch => ({
  clearCurrentFilterOptions: () => dispatch(clearCurrentFilterOptions()),
  clearWhereStatements: () => dispatch(clearWhereStatements()),
  newWhereStatement: (column, name, value) =>
    dispatch(newWhereStatement(column, name, value)),
  updateColumn: (oldColumn, newColumn) =>
    dispatch(updateColumn(oldColumn, newColumn))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColumnSelectionTemplate);
