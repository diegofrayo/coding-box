/*
  - Mutative: true
  - Description: removing/replacing/adding new items
  - Docs: [.splice | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
  - Syntax:
    splice(start)
    splice(start, deleteCount)
    splice(start, deleteCount, item1)
    splice(start, deleteCount, item1, item2, itemN)
*/

// {delete all elements from a given start index}
const input1 = ["a", "b", "c", "d", "e"];
console.log(input1.splice(1)); // ["b","c","d","e"]
console.log(input1); // ["a"]

// {delete one element (the second one)}
const input2 = ["a", "b", "c", "d", "e"];
console.log(input2.splice(1, 1)); // ["b"]
console.log(input2); // ["a","c","d","e"]

// {delete three elements (from the second one)}
const input3 = ["a", "b", "c", "d", "e"];
console.log(input3.splice(1, 3)); // ["b","c","d"]
console.log(input3); // ["a","e"]

// {insert one element after second element}
const input4 = ["a", "b", "c", "d", "e"];
console.log(input4.splice(2, 0, "b.a")); // []
console.log(input4); // ["a","b","b.a","c","d","e"]

// {insert two elements after third elements}
const input5 = ["a", "b", "c", "d", "e"];
console.log(input5.splice(3, 0, "c.a", "c.b")); // []
console.log(input5); // ["a","b","c","c.a","c.b","d","e"]

// {firstIndex}
const input6 = ["a", "b", "c", "d", "e"];
console.log(input6.splice(0)); // ["a","b","c","d","e"]
console.log(input6); // []

// {lastIndex}
const input7 = ["a", "b", "c", "d", "e"];
console.log(input7.splice(4)); // ["e"]
console.log(input7); // ["a","b","c","d"]

// {negativeIndex}
const input8 = ["a", "b", "c", "d", "e"];
console.log(input8.splice(-1)); // ["e"]
console.log(input8); // ["a","b","c","d"]

// {indexOutOfBounds}
const input9 = ["a", "b", "c", "d", "e"];
console.log(input9.splice(5)); // []
console.log(input9); // ["a","b","c","d","e"]
