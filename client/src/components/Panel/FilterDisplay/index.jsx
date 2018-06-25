import React from "react";
import MapFields from "./MapFields";
import FieldTemplate from "./FieldTemplate";

// presentational component for button logic
const FilterDisplay = () => (
  <form>
    <MapFields />
  </form>
);

export default FilterDisplay;

// local state for form validation
