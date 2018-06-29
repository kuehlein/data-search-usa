import { checkIfEmpty } from "../../../utils";

export const fields = (otherTables, currentOptions, sumlevel, year) => [
  {
    name: "Use Table", // loop through 'logic' array and find all 'table' attributes to create an array of options
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
    field: checkIfEmpty(currentOptions),
    description: "Column name to use for ordering the resulting data array."
  },
  {
    name: "Level",
    type: "sumlevel",
    field: checkIfEmpty(sumlevel), // required
    description:
      "This restricts the data fetched to only display the specified levels." // If more than one 'show' attribute is specified, sumlevel must be a comma-separated list with a value for each attribute.
  },
  {
    name: "Year", // only show if applicable
    type: "year",
    field: checkIfEmpty(year),
    description: "Filters the returned data to the given year."
  }
];

// export const fields = [
//   {
//     name: "Use Table", // loop through 'logic' array and find all 'table' attributes to create an array of options
//     type: "force",
//     field: checkIfEmpty(otherTables),
//     description: "Forces the use of a particular data table."
//   },
//   {
//     name: "Limit Rows",
//     type: "limit",
//     field: Infinity,
//     description: "Limits the number of rows returned by the query."
//   },
//   {
//     name: "Order of Columns",
//     type: "order",
//     field: checkIfEmpty(currentOptions),
//     description: "Column name to use for ordering the resulting data array."
//   },
//   {
//     name: "Level",
//     type: "sumlevel",
//     field: checkIfEmpty(sumlevel), // required
//     description:
//       "This restricts the data fetched to only display the specified levels." // If more than one 'show' attribute is specified, sumlevel must be a comma-separated list with a value for each attribute.
//   },
//   {
//     name: "Year", // only show if applicable
//     type: "year",
//     field: checkIfEmpty(year),
//     description: "Filters the returned data to the given year."
//   }
// ];

// // for each selected column
export const where = [
  {
    name: "Greater Than",
    expression: ":>", // check that greater than and less than dont conflict
    field: "",
    description: "Search for values greater than the input value."
  },
  {
    name: "Less Than",
    expression: ":<",
    field: "",
    description: "Search for values less than the input value."
  },
  {
    name: "Starts With",
    expression: ":^",
    field: "",
    description: "Search for values that start with the input word."
  },
  {
    name: "Ends With",
    expression: ":$",
    field: "",
    description: "Search for values that end with the input word."
  },
  {
    name: "Number Not Equal To",
    expression: ":!",
    field: "",
    description: "Search for values that are not equal to input number."
  },
  {
    name: "Text Not Equal To",
    expression: ":str!",
    field: "",
    description: "Search for values that are not equal to input text."
  }
];

/*
 * PARAMETER:           ACCEPTED VALUES:                                DESCRIPTION:
 *
 * force:               schema_name.table_name (Example):               Forces the use of a particular data table.
 *
 * limit:               integer:                                        Limits the number of rows returned by the query.
 *
 * order:               any available column name:                      Column name to use for ordering the resulting data array.
 *
 * show (required):     any available attribute:                        A comma-separated list of attributes to show in the query.
 *
 * sort:                desc or asc:                                    Changes the sort order of the returned data array.
 *
 * sumlevel (required): any available sumlevel for the given attribute: This restricts the data fetched to
 * only display the specified sumlevel(s). If more than one 'show' attribute is specified, sumlevel must be a
 * comma-separated list with a value for each attribute.
 *
 * year:                latest, oldest, all, 4-digit year:              Filters the returned data to the given year.
 *
 * where:               see below:                                      Advanced filtering of columns, similar to the WHERE clause on SQL.
 *
 * ----
 *
 *Sometimes, however, it's necessary to filter not merely by equality
 * but by other mechanisms. Using the where * query parameter provides
 * access to more complicated expressions.
 *
 * The basic syntax of using where is:
 * &where**=column_name:condition
 *
 * Let's say we wanted to filter the results of an API call to only show top-level industries containing more
 * than an estimated 10M people in the workforce. Here is how we would write that:
 *
 * http://api.datausa.io/api/?show=naics&sumlevel=0&where=num_ppl:>10000000
 *
 *
 * Here is a list of the available expressions:
 *
 * greater than	>	&where=num_ppl:>10000000
 * less than	<	&where=num_ppl:<10000000
 * string starts with	^	&where=naics:^23
 * string ends with	$ (placed after text)	&where=naics:3$
 * not equal (integer)	!	&where=avg_wage_rank:!1
 * not equal (string)	str!	&where=geo:str!04000US25
 */
