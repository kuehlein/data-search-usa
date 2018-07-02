import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import FieldSelect from "./FieldSelect";
import {
  setCurrentFilterOptions,
  clearCurrentFilterOptions,
  newWhereStatement,
  clearWhereStatements
} from "../../../store";

// flesh out the appropriate options for filtering
class MapFields extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const {
      clearCurrentFilterOptions,
      clearWhereStatements,
      currentFilterOptions
    } = this.props;

    if (
      this.props.currentTable !== nextProps.currentTable &&
      currentFilterOptions.length
    ) {
      clearCurrentFilterOptions();
      clearWhereStatements();
    }
  }

  handleChange(event, field, column) {
    const { setCurrentFilterOptions, newWhereStatement } = this.props;

    this.setState({ value: event.target.value });

    if (column) {
      newWhereStatement(column, field, event.target.value);
    } else {
      setCurrentFilterOptions(field, event.target.value);
    }
  }

  render() {
    const { field, currentFilterOptions, column } = this.props;

    return (
      <div>
        <label htmlFor={field.name}>
          {field.name}
          {Array.isArray(field.field) ? (
            <FieldSelect
              field={field}
              handleChange={this.handleChange}
              value={currentFilterOptions[field.type]}
            />
          ) : (
            <input
              type="text"
              name={field.name}
              title={field.description}
              value={this.state.value}
              onChange={e => this.handleChange(e, field.name, column)}
            />
          )}
        </label>
      </div>
    );
  }
}
MapFields.defaultProps = {
  field: [],
  currentTable: "",
  currentFilterOptions: {},
  setCurrentFilterOptions: () => {},
  clearCurrentFilterOptions: () => {},
  newWhereStatement: () => {},
  clearWhereStatements: () => {},
  column: ""
};

MapFields.propTypes = {
  field: PropTypes.any,
  currentTable: PropTypes.string,
  currentFilterOptions: PropTypes.objectOf(PropTypes.any),
  setCurrentFilterOptions: PropTypes.func,
  clearCurrentFilterOptions: PropTypes.func,
  newWhereStatement: PropTypes.func,
  clearWhereStatements: PropTypes.func,
  column: PropTypes.string
};

const mapStateToProps = state => ({
  currentTable: state.currentTable,
  currentFilterOptions: state.currentFilterOptions
});

const mapDispatchToProps = dispatch => ({
  setCurrentFilterOptions: (filter, value) =>
    dispatch(setCurrentFilterOptions(filter, value)),
  clearCurrentFilterOptions: () => dispatch(clearCurrentFilterOptions()),
  newWhereStatement: (column, name, value) =>
    dispatch(newWhereStatement(column, name, value)),
  clearWhereStatements: () => dispatch(clearWhereStatements())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapFields);
