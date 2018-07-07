import React, { Component } from "react";

import NewColumnFilterButton from "./Buttons/NewColumnFilterButton";
import ColumnSelectionTemplate from "./ColumnSelectionTemplate";

class FilterColumns extends Component {
  constructor(props) {
    super(props);
    // disable: -1, enable: 0, active 1
    this.state = {
      newFilter: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let filterCopy = this.state.newFilter;

    if (this.state.newFilter === 0) {
      this.setState({ newFilter: ++filterCopy });
    }
  }

  render() {
    return (
      <div>
        <ColumnSelectionTemplate
          handleClick={this.handleClick}
          newFilter={this.state.newFilter}
        />
        <NewColumnFilterButton
          handleClick={this.handleClick}
          shouldDisable={!!this.state.newFilter}
        />
      </div>
    );
  }
}

export default FilterColumns;
