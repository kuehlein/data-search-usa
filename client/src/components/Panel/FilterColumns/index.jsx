import React, { Component } from "react";
import PropTypes from "prop-types";

import NewColumnFilterButton from "./Buttons/NewColumnFilterButton";
import ColumnSelectionTemplate from "./ColumnSelectionTemplate";

class FilterColumns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.handleNewFilterColumn = this.handleNewFilterColumn.bind(this);
  }

  handleNewFilterColumn(type) {
    if (type === "filter") {
      this.setState({ clicked: true });
    } else {
      this.setState({ clicked: false });
    }
  }

  render() {
    const { shouldDisable, handleColumnValue } = this.props;

    return (
      <div>
        <ColumnSelectionTemplate
          handleColumnValue={handleColumnValue}
          handleNewFilterColumn={this.handleNewFilterColumn}
          clicked={this.state.clicked}
          shouldDisable={shouldDisable}
        />
        <NewColumnFilterButton
          shouldDisable={shouldDisable}
          handleNewFilterColumn={this.handleNewFilterColumn}
        />
      </div>
    );
  }
}
FilterColumns.defaultProps = {
  shouldDisable: true,
  handleColumnValue: () => {}
};

FilterColumns.propTypes = {
  shouldDisable: PropTypes.bool,
  handleColumnValue: PropTypes.func
};

export default FilterColumns;
