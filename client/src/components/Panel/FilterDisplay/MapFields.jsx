import React from "react";
import PropTypes from "prop-types";

const MapFields = props => {
  const { handleClick, fields, where } = props;
  const propsAvailable = fields.length ? fields : where;

  return (
    <div>
      {propsAvailable &&
        propsAvailable.map(field => (
          <div key={field}>
            <label>
              {field}
              <input type="text" name="fname" />
            </label>
            <br />
          </div>
        ))}
    </div>
  );
};
MapFields.defaultProps = {
  handleClick: () => {}
};

MapFields.propTypes = {
  handleClick: PropTypes.func
};

export default MapFields;

// array = select
// integer = input
//
// sumlevel ???
