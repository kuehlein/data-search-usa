import React, { Component } from "react";
import PropTypes from "prop-types";

class RemoveFilterButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const {
      handleChange,
      chooseVisibilityFilterField,
      chooseVisibilityFilterColumnButton,
      value
    } = this.props;

    if (value) {
      handleChange(value, "");
    } else {
      chooseVisibilityFilterField(false);
      chooseVisibilityFilterColumnButton(true);
    }
  }

  render() {
    return (
      <button
        className="panel-button remove-button"
        onClick={() => this.handleClick()}
      >
        Remove?
      </button>
    );
  }
}
RemoveFilterButton.defaultProps = {
  value: "",
  handleChange: () => {},
  chooseVisibilityFilterField: () => {},
  chooseVisibilityFilterColumnButton: () => {}
};

RemoveFilterButton.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
  chooseVisibilityFilterField: PropTypes.func,
  chooseVisibilityFilterColumnButton: PropTypes.func
};

export default RemoveFilterButton;
