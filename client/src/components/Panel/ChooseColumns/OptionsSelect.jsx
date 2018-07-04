import React from "react";
import PropTypes from "prop-types";
import MapButtons from "./MapButtons";

// container for buttons to choose column options
const OptionsSelect = props => {
  const { handleClick, currentOptions } = props;

  return (
    <div className="d-flex justify-content-center flex-wrap">
      <MapButtons handleClick={handleClick} currentOptions={currentOptions} />
    </div>
  );
};
OptionsSelect.defaultProps = {
  handleClick: () => {},
  currentOptions: []
};

OptionsSelect.propTypes = {
  handleClick: PropTypes.func,
  currentOptions: PropTypes.arrayOf(PropTypes.string)
};

export default OptionsSelect;
