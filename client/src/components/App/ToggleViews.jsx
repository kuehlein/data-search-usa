import React from "react";
import PropTypes from "prop-types";

const ToggleViews = ({ handleClick, visibility }) => (
  <button className="toggle-views" onClick={() => handleClick(!visibility)}>
    {visibility ? "?" : "View Table"}
  </button>
);

ToggleViews.defaultProps = {
  handleClick: () => {},
  visibility: false
};

ToggleViews.propTypes = {
  handleClick: PropTypes.func,
  visibility: PropTypes.bool
};

export default ToggleViews;
