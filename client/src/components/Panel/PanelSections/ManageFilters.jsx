import React, { Component } from "react";
import PropTypes from "prop-types";

import ChooseColumn from "../PanelToggles/ChooseColumn";
import FilterNewColumn from "../PanelToggles/FilterNewColumn";
import FilterDisplay from "./FilterDisplay";

import { proliferateFields } from "../../../utils";
import { where } from "../IterableContent/fieldTemplate";

const jsxTemplate = (
  currentColumns,
  handleSelectChange,
  columns,
  value
) => i => (
  <div key={i}>
    <ChooseColumn
      currentColumns={currentColumns}
      handleSelectChange={handleSelectChange}
      value={value} // [i]
    />
    <FilterDisplay where={where} column={columns[i]} value={value} />
  </div>
);

class ManageFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "" // []
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(event) {
    // this.state.value.concat(event.target.value)
    // empty str?

    this.setState({ value: event.target.value });
    this.props.handleChange(event, this.state.value);
  }

  render() {
    const { handleClick, currentColumns, columns, filterNum } = this.props;
    const template = jsxTemplate(
      currentColumns,
      this.handleSelectChange,
      columns,
      this.state.value
    );
    const shouldDisable = () => {
      if (!currentColumns[0]) return true;
      return currentColumns.length === filterNum;
    };

    return (
      <div>
        {proliferateFields(filterNum, template).map(set => set)}
        <FilterNewColumn
          handleClick={handleClick}
          shouldDisable={shouldDisable()}
          filterNum={filterNum}
        />
      </div>
    );
  }
}
ManageFilters.defaultProps = {
  handleClick: () => {},
  handleChange: () => {},
  currentColumns: [],
  columns: [],
  filterNum: 0
};

ManageFilters.propTypes = {
  handleClick: PropTypes.func,
  handleChange: PropTypes.func,
  currentColumns: PropTypes.arrayOf(PropTypes.string),
  columns: PropTypes.arrayOf(PropTypes.string),
  filterNum: PropTypes.number
};

export default ManageFilters;
