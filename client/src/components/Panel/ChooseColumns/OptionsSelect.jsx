import React from "react";
import PropTypes from "prop-types";
import MapButtons from "./MapButtons";

// container for buttons to choose column options
const OptionsSelect = props => {
  const { handleClick, currentOptions, currentColumns } = props;

  return (
    <div className="choose-options group-margin">
      <MapButtons
        handleClick={handleClick}
        currentOptions={currentOptions}
        currentColumns={currentColumns}
      />
    </div>
  );
};
OptionsSelect.defaultProps = {
  handleClick: () => {},
  currentOptions: [""],
  currentColumns: [""]
};

OptionsSelect.propTypes = {
  handleClick: PropTypes.func,
  currentOptions: PropTypes.arrayOf(PropTypes.string),
  currentColumns: PropTypes.arrayOf(PropTypes.string)
};

export default OptionsSelect;
