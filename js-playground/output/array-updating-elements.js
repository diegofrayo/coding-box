// Description: {Update by index}
// Mutative: {true}
const input1 = ["a","b","c","d","e"];
console.log(input1[0] = "firstElement"); // "firstElement"
console.log(input1); // ["firstElement","b","c","d","e"]

// Description: {Update by value}
// Mutative: {false}
const input2 = ["a","b","c","d","e"];
console.log(input2.map((element) => element === "a" ? "AAA" : element)); // ["AAA","b","c","d","e"]
console.log(input2); // ["a","b","c","d","e"]

// Description: {replacing}
// Mutative: {true}
const input3 = ["a","b","c","d","e"];
console.log(input3.splice(2, 1, "X")); // ["c"]
console.log(input3); // ["a","b","X","d","e"]