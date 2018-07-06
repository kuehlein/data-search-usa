import { checkIfEmpty } from "./utils";

const fields = (otherTables, currentOptions, sumlevel, year) => [
  {
    name: "Use Table",
    type: "force",
    field: checkIfEmpty(otherTables),
    description: "Forces the use of a particular data table."
  },
  {
    name: "Limit Rows",
    type: "limit",
    field: Infinity,
    description: "Limits the number of rows returned by the query."
  },
  {
    name: "Order of Columns",
    type: "order",
    field:
      currentOptions[0] === "THIS TABLE IS CURRENTLY UNAVAILABLE"
        ? checkIfEmpty([])
        : checkIfEmpty(currentOptions),
    description: "Column name to use for ordering the resulting data array."
  },
  {
    name: "Level",
    type: "sumlevel",
    field: checkIfEmpty(sumlevel),
    description:
      "This restricts the data fetched to only display the specified levels." // If more than one 'show' attribute is specified, sumlevel must be a comma-separated list with a value for each attribute.
  },
  {
    name: "Year",
    type: "year",
    field: checkIfEmpty(year),
    description: "Filters the returned data to the given year."
  }
];

export default fields;
