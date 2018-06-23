import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";

import { setCurrentTable, setAllTables, setAllOptions } from "../../../store";

class TableSelection extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // two requests are made to datausa's api
    // the response of the axios call holds both
    axios
      .get("/api/table/datausa")
      .then(res => {
        this.props.setAllTables(res.data[0]);
        this.props.setAllOptions(res.data[1]);
      })
      .catch(err => console.log(err));
  }

  // componentWillReceiveProps(nextProps) {
  // const { currentTable } = nextProps;
  // axios
  //   .get(`/api/table/datausa/${currentTable}`)
  //   .then(res => thing)
  //   .catch(err => console.log(err));
  // }

  handleClick(type) {
    this.props.setCurrentTable(type);
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
TableSelection.defaultProps = {
  // currentTable: "",
  setCurrentTable: "",
  allTables: [],
  setAllTables: [],
  setAllOptions: {}
};

TableSelection.propTypes = {
  // currentTable: PropTypes.string,
  setCurrentTable: PropTypes.func,
  allTables: PropTypes.arrayOf(PropTypes.string),
  setAllTables: PropTypes.func,
  setAllOptions: PropTypes.func
};

const mapStateToProps = state => ({
  // currentTable: state.table,
  allTables: state.allTables
});

const mapDispatchToProps = dispatch => ({
  setCurrentTable: currentTable => dispatch(setCurrentTable(currentTable)),
  setAllTables: allTables => dispatch(setAllTables(allTables)),
  setAllOptions: allOptions => dispatch(setAllOptions(allOptions))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableSelection);
