import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { setTable, setAllTables } from "../../../store";

class ButtonDisplay extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/table/datausa")
      .then(res => this.props.setAllTables(res.data.data))
      .catch(err => console.log(err));
  }

  componentWillReceiveProps(nextProps) {
    const { table } = nextProps;

    axios
      .get(`/api/table/datausa/${table}`)
      // .then(res => this.props.setOptions({ datausa: res.data }))
      .catch(err => console.log(err));
  }

  handleClick(type) {
    this.props.setTable(type);
  }

  render() {
    const { allTables } = this.props;

    return (
      <div>
        {allTables &&
          allTables.map(category => (
            <button key={category} onClick={() => this.handleClick(category)}>
              {category}
            </button>
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  table: state.table,
  allTables: state.allTables
});

const mapDispatchToProps = dispatch => ({
  setTable: table => dispatch(setTable(table)),
  setAllTables: tables => dispatch(setAllTables(tables))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonDisplay);

// save buttons to db and retrieve their names
