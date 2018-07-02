import React, { Component } from "react";
import PropTypes from "prop-types";

const LABEL_TEXT = "Select a column to filter:";

// generate a field to select a column to filter
class ChooseColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  render() {
    const { currentColumns, handleChange } = this.props;
    const { value } = this.state;

    return (
      <label htmlFor={LABEL_TEXT}>
        {LABEL_TEXT}
        <select
          value={value}
          onChange={e => {
            this.setState({ value: e.target.value });
            handleChange(e, value);
          }}
        >
          <option />
          {currentColumns.map((column, i) => (
            <option key={i} value={column}>
              {column}
            </option>
          ))}
        </select>
      </label>
    );
  }
}
ChooseColumn.defaultProps = {
  currentColumns: [],
  handleChange: () => {}
};

ChooseColumn.propTypes = {
  currentColumns: PropTypes.arrayOf(PropTypes.string),
  handleChange: PropTypes.func
};

export default ChooseColumn;
