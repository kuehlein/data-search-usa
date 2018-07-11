// // cross reference currentColumns with whereStatements
// export const siftColumnArrays = (all, selected, key, value) => {
//   const unused = [];
//   // if (key) unused.push(key);

//   for (let i = 0; i < all.length; i++) {
//     let current;

//     for (let j = 0; j < selected.length; j++) {
//       current = selected[j].name;
//       // if (j === key) unused.push(current);
//     }

//     if (all[i] !== current || all[i] === value) {
//       unused.push(all[i]);
//     }
//   }

//   return unused;
// };

// export const checkForColumn = (arr, oldVal, newVal) => {
//   const newArr = arr.slice();

//   for (let i = 0; i < newArr.length; i++) {
//     if (newArr[i] === oldVal) {
//       newArr[i] === newVal;
//     }
//   }

//   newArr.push(newVal);
//   return newArr;
// };
