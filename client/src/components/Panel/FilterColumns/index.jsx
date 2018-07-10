import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import NewColumnFilterButton from "./Buttons/NewColumnFilterButton";
import ColumnFilterTemplate from "./Templates/ColumnFilterTemplate";
import MapTemplate from "./Iterables/MapTemplate";

import {
  chooseVisibilityFilterColumnButton,
  chooseVisibilityFilterField,
  newWhereStatement,
  updateColumn
} from "../../../store";

class FilterColumns extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const {
      chooseVisibilityFilterColumnButton,
      currentColumns,
      whereStatements
    } = nextProps;
    const shouldHide = currentColumns.length !== whereStatements.length;

    if (
      this.props.currentColumns !== nextProps.currentColumns ||
      this.props.whereStatements !== nextProps.whereStatements
    ) {
      chooseVisibilityFilterColumnButton(shouldHide);
    }
  }

  handleClick() {
    const {
      chooseVisibilityFilterField,
      chooseVisibilityFilterColumnButton
    } = this.props;

    chooseVisibilityFilterField(true);
    chooseVisibilityFilterColumnButton(false);
  }

  render() {
    const {
      visibility,
      currentColumns,
      chooseVisibilityFilterField,
      newWhereStatement,
      updateColumn
    } = this.props;

    return (
      <div>
        <MapTemplate
          handleChange={updateColumn}
          handleInputChange={newWhereStatement}
        />
        {visibility.filterField && (
          <ColumnFilterTemplate
            value={{}}
            currentColumns={currentColumns}
            chooseVisibilityFilterField={chooseVisibilityFilterField}
            handleChange={updateColumn}
            handleInputChange={newWhereStatement}
          />
        )}
        {visibility.filterColumnButton && (
          <NewColumnFilterButton handleClick={this.handleClick} />
        )}
      </div>
    );
  }
}
FilterColumns.defaultProps = {
  visibility: {},
  currentColumns: [""],
  whereStatements: [{}],
  chooseVisibilityFilterColumnButton: () => {},
  chooseVisibilityFilterField: () => {},
  newWhereStatement: () => {},
  updateColumn: () => {}
};

FilterColumns.propTypes = {
  visibility: PropTypes.objectOf(PropTypes.bool),
  currentColumns: PropTypes.arrayOf(PropTypes.string),
  whereStatements: PropTypes.arrayOf(PropTypes.object),
  chooseVisibilityFilterColumnButton: PropTypes.func,
  chooseVisibilityFilterField: PropTypes.func,
  newWhereStatement: PropTypes.func,
  updateColumn: PropTypes.func
};

const mapStateToProps = state => ({
  visibility: state.visibility,
  currentColumns: state.currentColumns,
  whereStatements: state.whereStatements
});

const mapDispatchToProps = dispatch => ({
  chooseVisibilityFilterColumnButton: visibility =>
    dispatch(chooseVisibilityFilterColumnButton(visibility)),
  chooseVisibilityFilterField: visibility =>
    dispatch(chooseVisibilityFilterField(visibility)),
  newWhereStatement: (column, name, value) =>
    dispatch(newWhereStatement(column, name, value)),
  updateColumn: (oldColumn, newColumn) =>
    dispatch(updateColumn(oldColumn, newColumn))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterColumns);
