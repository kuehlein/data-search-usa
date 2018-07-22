import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import SelectField from "./SelectField";
import ToggleDND from "./ToggleDND";

import {
  setCurrentFilterOptions,
  changeOrderCurrentColumns
} from "../../../store";

// map out filter fields
class TableFilterDisplay extends Component {
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
    const { value } = event.target;

    this.setState({ value });
    this.props.setCurrentFilterOptions(field, value);
  }

  render() {
    const {
      field,
      currentFilterOptions,
      currentColumns,
      changeOrderCurrentColumns
    } = this.props;

    return field.type !== "order" ? (
      <div className="input-group-prepend group-margin">
        <label className="input-group-text" htmlFor={field.name}>
          {`${field.name}:`}
        </label>
        {Array.isArray(field.field) ? (
          <SelectField
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
            onChange={e => this.handleChange(e, field.type)}
            className="group-margin"
          />
        )}
      </div>
    ) : (
      <ToggleDND
        field={field}
        currentColumns={currentColumns}
        changeOrderCurrentColumns={changeOrderCurrentColumns}
      />
    );
  }
}
TableFilterDisplay.defaultProps = {
  field: {},
  setCurrentFilterOptions: () => {},
  currentFilterOptions: {},
  currentTable: "",
  currentColumns: [""],
  changeOrderCurrentColumns: () => {}
};

TableFilterDisplay.propTypes = {
  field: PropTypes.objectOf(PropTypes.any),
  setCurrentFilterOptions: PropTypes.func,
  currentFilterOptions: PropTypes.objectOf(PropTypes.string),
  currentTable: PropTypes.string,
  currentColumns: PropTypes.arrayOf(PropTypes.string),
  changeOrderCurrentColumns: PropTypes.func
};

const mapStateToProps = state => ({
  currentFilterOptions: state.currentFilterOptions,
  currentTable: state.currentTable
});

const mapDispatchToProps = dispatch => ({
  setCurrentFilterOptions: (filter, value) =>
    dispatch(setCurrentFilterOptions(filter, value)),
  changeOrderCurrentColumns: columns =>
    dispatch(changeOrderCurrentColumns(columns))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableFilterDisplay);
