/*
 * SEARCH FOR EACH COLUMN'S NAME IN O(n) TIME:
 *
 *   -"grabColumns" is the root function
 *     -it calls a function that searches for column names
 *      and combines it with other column names
 *
 *   -"deepSearch" is called by "grabColumns"
 *     -it searches the data retrieved from the API call
 *      using depth and index information provided by
 *      functions called within: "findDepth", "findIndex"
*/

// find the index of the column's name
// const findIndex = arr => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] && arr[i]) {
//       // regex, num coercion
//     }
//   }
// };

// UNNECESSARY
// find the depth of useful data
// const findDepth = arr => {
//   const depth = [];
//   let current = arr;

//   while (true) {
//     if (Array.isArray(current[0])) {
//       depth.push(0);
//       current = current[0];
//     } else {
//       return [depth, findIndex(current)];
//     }
//   }
// };

// const deepSearch = arr => {
//   const columns = [];
//   const [depth, index] = findDepth(arr);
//   let count = 0;

//   // navigate data at specified depth
//   while (count < arr.length) {}
//   return columns;
// };

// const grabColumns = arr => arr.headers.concat(deepSearch(arr.data)); // not this

// default export grabColumns;

// THIS SHOULD ALL BE DONE ON THE BACKEND
