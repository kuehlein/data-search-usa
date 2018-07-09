import React from "react";
import PropTypes from "prop-types";
import MapButtons from "./MapButtons";

// container for buttons to choose column options
const OptionsSelect = props => {
  const { handleClickFilter, handleClick, currentOptions } = props;

  return (
    <div className="d-flex justify-content-center flex-wrap">
      <MapButtons
        handleClickFilter={handleClickFilter}
        handleClick={handleClick}
        currentOptions={currentOptions}
      />
    </div>
  );
};
OptionsSelect.defaultProps = {
  handleClickFilter: () => {},
  handleClick: () => {},
  currentOptions: []
};

OptionsSelect.propTypes = {
  handleClickFilter: PropTypes.func,
  handleClick: PropTypes.func,
  currentOptions: PropTypes.arrayOf(PropTypes.string)
};

export default OptionsSelect;
