import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import PropTypes from "prop-types";

// import createTable from './utils'
import "./Map.css";

class Map extends Component {
  constructor() {
    super();
    this.state = {
      datausa: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    const { currentTable } = nextProps;

    axios
      .get(`/api/table/datausa/${currentTable}`)
      // .then(res => this.props.)
      .then(res => this.setState({ datausa: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    const { datausa } = this.state;
    console.log(datausa); // <----(DELETE)--------<<<

    const dataStatus = () => {
      if (datausa.headers) {
        return (
          <div>
            <p>data retrieved successfully</p>
            {/* <p>dataset: {datausa.source.dataset}</p>
              <p>
                org: <a href={`${datausa.source.link}`}>{datausa.source.org}</a>
              </p>
              <p>table: {datausa.source.table}</p> */}
          </div>
        );
      }
      if (datausa.error) {
        return <p>this table is not available at this time</p>;
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
        {dataStatus()}
      </div>
    );
  }
}
Map.defaultProps = {
  currentTable: ""
};

Map.propTypes = {
  currentTable: PropTypes.string
};

const mapStateToProps = state => ({
  currentTable: state.currentTable
});

export default connect(mapStateToProps)(Map);

// victory charts
