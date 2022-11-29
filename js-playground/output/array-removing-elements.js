/*
* --- Removing elements ---
*/

// Description: {remove by element value}
// Mutative: {false}
const input1 = undefined;
console.log(input1.filter(element => element !== 'a')); // ["b","c","d","e"]
console.log(input1);

// Description: {remove by index}
// Mutative: {true}
const input2 = ["a","b","c","d","e"];
console.log(input2.splice(2, 1)); // ["c"]
console.log(input2); // ["a","b","d","e"]

// Description: {remove the first element}
// Mutative: {true}
const input3 = ["a","b","c","d","e"];
console.log(input3.shift()); // a
console.log(input3); // ["b","c","d","e"]

// Description: {remove the last element}
// Mutative: {true}
const input4 = ["a","b","c","d","e"];
console.log(input4.pop()); // e
console.log(input4); // ["a","b","c","d"]