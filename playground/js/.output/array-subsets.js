// Description: {Subset with a given start and end}
// Mutative: {false}
const input1 = ["a", "b", "c", "d", "e"];
console.log(input1.slice(1, input1.length - 1)); // ["b","c","d"]
console.log(input1); // ["a","b","c","d","e"]

// Description: {Subset with a given start and end}
// Mutative: {true}
const input2 = ["a", "b", "c", "d", "e"];
console.log(input2.splice(input2.length - 1, 1)); // ["e"]
console.log(input2.splice(0, 1)); // ["a"]
console.log(input2); // ["b","c","d"]
