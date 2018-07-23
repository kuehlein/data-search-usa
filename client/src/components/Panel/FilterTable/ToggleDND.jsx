import React, { Component } from "react";
import PropTypes from "prop-types";

import DNDColumnOrder from "./DNDColumnOrder";

class ToggleDND extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonToggle: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const copy = this.state.buttonToggle;

    this.setState({ buttonToggle: !copy });
  }

  render() {
    const { field, currentColumns, changeOrderCurrentColumns } = this.props;

    return (
      <label htmlFor={field.name}>
        <button
          className="panel-button order-columns-button"
          onClick={() => this.handleClick()}
          disabled={currentColumns.length < 2}
        >
          {field.name}
        </button>
        {this.state.buttonToggle && (
          <DNDColumnOrder
            currentColumns={currentColumns}
            changeOrderCurrentColumns={changeOrderCurrentColumns}
          />
        )}
      </label>
    );
  }
}
ToggleDND.defaultProps = {
  field: {},
  currentColumns: [""],
  changeOrderCurrentColumns: () => {}
};

ToggleDND.propTypes = {
  field: PropTypes.objectOf(PropTypes.any),
  currentColumns: PropTypes.arrayOf(PropTypes.string),
  changeOrderCurrentColumns: PropTypes.func
};

export default ToggleDND;
