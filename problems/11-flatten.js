/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(arr) {
  // Your code here
  if (arr.length === 0) return [];
  let ele = arr.shift();

  if (Array.isArray(ele)) return flatten([...ele,...arr]) //=> flatten([3])
  return [ele].concat(flatten(arr)); 
}

// console.log(flatten([])); // []
// console.log(flatten([1, 2])); // [1, 2]
// debugger
// console.log(flatten([1, [2, [3]]])); // [1, 2, 3]
console.log(flatten([[1,[2,[3,4]]],
  [3, [4, 5]],])); // [1, 2, 3, 4, 5]

  
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
  