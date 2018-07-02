import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import FieldSelect from "./FieldSelect";
import { setCurrentFilterOptions, newWhereStatement } from "../../../store";

// flesh out the appropriate options for filtering
class MapSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
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
MapSelect.defaultProps = {
  field: [],
  currentFilterOptions: {},
  setCurrentFilterOptions: () => {},
  newWhereStatement: () => {},
  column: ""
};

MapSelect.propTypes = {
  field: PropTypes.any,
  currentFilterOptions: PropTypes.objectOf(PropTypes.any),
  setCurrentFilterOptions: PropTypes.func,
  newWhereStatement: PropTypes.func,
  column: PropTypes.string
};

const mapStateToProps = state => ({
  currentFilterOptions: state.currentFilterOptions
});

const mapDispatchToProps = dispatch => ({
  setCurrentFilterOptions: (filter, value) =>
    dispatch(setCurrentFilterOptions(filter, value)),
  newWhereStatement: (column, name, value) =>
    dispatch(newWhereStatement(column, name, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapSelect);
