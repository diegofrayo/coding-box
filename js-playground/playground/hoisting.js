// --- vars ---

console.log(hi);
var hi = "hello";
console.log(hi);

try {
  console.log(notDefined);
} catch (error) {
  console.log("not defined variables", error.message);
}

// --- lets/const ---

try {
  console.log(world);
  let world;
} catch (error) {
  console.log("let", error.message);
}

try {
  console.log(world);
  const world = "world";
} catch (error) {
  console.log("const", error.message);
}
