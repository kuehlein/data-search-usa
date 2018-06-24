import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// import createTable from './utils'
import "./Map.css";

class Map extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   datausa: {}
    // };
  }

  // componentWillReceiveProps(nextProps) {
  //   const { table } = nextProps;
  // }

  render() {
    // const { datausa } = this.state;
    const { table } = this.props;
    console.log(table); // <----(DELETE)--------<<<

    const dataStatus = () => {
      if (table) {
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

    return (
      <div className="App-intro">
        {/* datausa.headers && createTable(datausa.headers, datausa.data) */}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {table.headers && table}
        {table.headers && dataStatus()}
      </div>
    );
  }
}
Map.defaultProps = {
  table: {}
};

Map.propTypes = {
  table: PropTypes.objectOf()
};

const mapStateToProps = state => ({
  table: state.table
});

export default connect(mapStateToProps)(Map);
