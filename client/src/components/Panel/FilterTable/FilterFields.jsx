import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SelectField from "./SelectField";

import { setCurrentFilterOptions } from "../../../store";

// map out filter fields
class FilterFields extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentTable !== nextProps.currentTable) {
      this.setState({ value: "" });
    }
  }

  handleChange(event, field) {
    const { setCurrentFilterOptions } = this.props;

    this.setState({ value: event.target.value });
    setCurrentFilterOptions(field, event.target.value);
  }

  render() {
    const { field, currentFilterOptions, currentTable } = this.props;
    const disable = !currentTable;

    return (
      <div>
        <label htmlFor={field.name}>
          {field.name}
          {Array.isArray(field.field) ? (
            <SelectField
              field={field}
              handleChange={this.handleChange}
              value={currentFilterOptions[field.type]}
              disable={disable}
            />
          ) : (
            <input
              type="text"
              name={field.name}
              title={field.description}
              value={disable ? "" : this.state.value}
              onChange={e => this.handleChange(e, field.type)}
              disabled={disable}
            />
          )}
        </label>
      </div>
    );
  }
}
FilterFields.defaultProps = {
  field: {},
  setCurrentFilterOptions: () => {},
  currentFilterOptions: {},
  currentTable: ""
};

FilterFields.propTypes = {
  field: PropTypes.objectOf(PropTypes.any),
  setCurrentFilterOptions: PropTypes.func,
  currentFilterOptions: PropTypes.objectOf(PropTypes.string),
  currentTable: PropTypes.string
};

const mapStateToProps = state => ({
  currentFilterOptions: state.currentFilterOptions,
  currentTable: state.currentTable
});

const mapDispatchToProps = dispatch => ({
  setCurrentFilterOptions: (filter, value) =>
    dispatch(setCurrentFilterOptions(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterFields);
