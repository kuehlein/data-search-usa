import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./Map.css";

const dataStatus = table => {
  if (table.headers) {
    return (
      <div>
        <p>data retrieved successfully</p>
        <p>dataset: {table.source.dataset}</p>
        <p>
          org: <a href={`${table.source.link}`}>{table.source.org}</a>
        </p>
        <p>table: {table.source.table}</p>
      </div>
    );
  }
  return <p>please make a request</p>;
};

const Map = props => {
  const { table } = props;
  console.log(table); // <----(DELETE)--------<<<

  return (
    <div className="App-intro">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {dataStatus(table)}
    </div>
  );
};
Map.defaultProps = {
  table: {}
};

Map.propTypes = {
  table: PropTypes.objectOf(PropTypes.any)
};

const mapStateToProps = state => ({
  table: state.table
});

export default connect(mapStateToProps)(Map);
