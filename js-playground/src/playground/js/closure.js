// --- UTILS ---

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

// --- EXAMPLE 1 ---

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log("--- Example 1 ---");
console.log("counter1", counter1());
console.log("counter2", counter2());
console.log("counter1", counter1());
console.log("counter2", counter2());
console.log("counter1", counter1());
console.log("counter2", counter2());
console.log("counter1", counter1());
console.log("counter2", counter2());
console.log("");

// --- EXAMPLE 2 ---

let counter3 = makeCounter();

console.log("--- Example 2 ---");
console.log("counter3");
console.log(counter3());
console.log(counter3());
console.log(counter3());
console.log(counter3());
console.log("");

counter3 = makeCounter();

console.log("counter3 created again");
console.log(counter3());
console.log(counter3());
console.log(counter3());
console.log(counter3());
console.log("");
