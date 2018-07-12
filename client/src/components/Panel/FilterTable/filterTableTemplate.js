import { checkIfEmpty } from "../utils";

const fields = (otherTables, currentColumns, sumlevel, year) => [
  // ***NO OTHER TABLES CURRENTLY AVAILABLE***
  // {
  //   name: "Use Table",
  //   type: "force",
  //   field: checkIfEmpty(otherTables),
  //   description: "Forces the use of a particular data table."
  // },
  {
    name: "Limit Rows",
    type: "limit",
    field: Infinity,
    description: "Limits the number of rows returned by the query."
  },
  {
    name: "Order of Columns",
    type: "order",
    field: "",
    description: "Column name to use for ordering the resulting data array."
  },
  {
    name: "Level",
    type: "sumlevel",
    field: checkIfEmpty(sumlevel),
    description:
      "This restricts the data fetched to only display the specified levels."
  }
  // {
  //   name: "Year",
  //   type: "year",
  //   field: checkIfEmpty(year),
  //   description: "Filters the returned data to the given year."
  // }
];

export default fields;
