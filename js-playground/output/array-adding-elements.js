/*
* --- Adding elements ---
*/

// Description: {add element at the end of the array}
// Mutative: {false}
const input1 = ["a","b","c","d","e"];
console.log(input1.concat(["f"])); // ["a","b","c","d","e","f"]
console.log(input1); // ["a","b","c","d","e"]

// Description: {add element at the end of the array}
// Mutative: {true}
const input2 = ["a","b","c","d","e"];
console.log(input2.push("f")); // 6
console.log(input2); // ["a","b","c","d","e","f"]

// Description: {add element at the beginning of the array}
// Mutative: {true}
const input3 = ["a","b","c","d","e"];
console.log(input3.unshift("0")); // 6
console.log(input3); // ["0","a","b","c","d","e"]

// Description: {add element at a given position}
// Mutative: {true}
const input4 = ["a","b","c","d","e"];
console.log(input4.splice(2, 0, "b.a")); // []
console.log(input4); // ["a","b","b.a","c","d","e"]