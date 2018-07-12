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
      visibility,
      currentColumns,
      changeOrderCurrentColumns
    } = this.props;

    return (
      visibility.filterTable && (
        <div>
          {field.type !== "limit" ? (
            <label htmlFor={field.name}>
              {field.name}
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
                />
              )}
            </label>
          ) : (
            <ToggleDND
              field={field}
              currentColumns={currentColumns}
              changeOrderCurrentColumns={changeOrderCurrentColumns}
            />
          )}
        </div>
      )
    );
  }
}
TableFilterDisplay.defaultProps = {
  field: {},
  setCurrentFilterOptions: () => {},
  currentFilterOptions: {},
  currentTable: "",
  visibility: {},
  currentColumns: [""],
  changeOrderCurrentColumns: () => {}
};

TableFilterDisplay.propTypes = {
  field: PropTypes.objectOf(PropTypes.any),
  setCurrentFilterOptions: PropTypes.func,
  currentFilterOptions: PropTypes.objectOf(PropTypes.string),
  currentTable: PropTypes.string,
  visibility: PropTypes.objectOf(PropTypes.bool),
  currentColumns: PropTypes.arrayOf(PropTypes.string),
  changeOrderCurrentColumns: PropTypes.func
};

const mapStateToProps = state => ({
  currentFilterOptions: state.currentFilterOptions,
  currentTable: state.currentTable,
  visibility: state.visibility
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
