const object = { name: "Diego", age: 30, data: {} };

console.log("");
iterateObject(object);
iterateObject([]);
iterateObject(0);
iterateObject("");
iterateObject(null);
iterateObject();

const array = ["a", "b", , "d", "e", "f", "g"];
array.customProp = "customProp";

console.log("");
iterateArray1(array);
iterateArray1([]);
iterateArray1(0);
iterateArray1("");
iterateArray1(null);
iterateArray1();

console.log("");
iterateArray2(array);
iterateArray2([]);
// iterateArray2(0); // error
// iterateArray2(""); // error
// iterateArray2(null); // error
// iterateArray2(); // error

// --- UTILS ---

function iterateObject(object) {
  for (key in object) {
    console.log(key, "=>", object[key]);
  }
}

function iterateArray1(array) {
  for (key in array) {
    console.log(key, "=>", array[key]);
  }
}

function iterateArray2(array) {
  for (value of array) {
    console.log(value);
  }
}
