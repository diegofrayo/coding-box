const Utils = require("../../utils");

const object = {
  name: "Diego",
  lastName: "Rayo",
  age: 0,
  height: undefined,
  get ["fullName"]() {
    return this.name + " " + this.lastName;
  },
  0: "Keys could be numbers, strings, computed values or symbols. This key is a number but is converted to a string automatically",
  regularSyntax: function() {
    return this; // it's the same
  },
  shorthandSyntax() {
    return object; // it's the same, but less safe
  }
};
object.new = "new";

console.log(
  Utils.insertLine("// --- Accesing to its properties ---", {
    topBreakLines: 1
  })
);

console.log("object", "|", object);
console.log("object.fullName", "|", object.fullName);
// console.log(object.fullName()); // error, fullName is not a function
console.log('object["0"]', "|", object["0"]); // It's the same
console.log("object[0]", "|", object[0]); // It's the same

// --- --- --- --- --- --- --- ---

console.log(
  Utils.insertLine("// --- Accesing to the proto ---", { topBreakLines: 1 })
);

object.__proto__ = 5; // It doesn't work, you can't overwrite the proto
console.log("object.__proto__", object.__proto__);

// --- --- --- --- --- --- --- ---

console.log(Utils.insertLine("// --- 'in' operator ---", { topBreakLines: 1 }));

console.log('"name" in object', "|", "name" in object); // true
console.log('"genre" in object', "|", "genre" in object); // false
console.log('"age" in object', "|", "age" in object); // true
console.log("object.age ? object.age : -1", "|", object.age ? object.age : -1); // -1
console.log('"height" in object', "|", "height" in object); // true
console.log(
  "object.height ? object.height : undefined",
  "|",
  object.height ? object.height : undefined
); // undefined

for (let key in object) {
  console.log("key", "|", key);
}

// --- --- --- --- --- --- --- ---

console.log(
  Utils.insertLine("// --- Executing properties that are functions ---", {
    topBreakLines: 1
  })
);

console.log("object.regularSyntax()", "|", object.regularSyntax());
console.log("object.shorthandSyntax()", "|", object.shorthandSyntax());

// --- --- --- --- --- --- --- ---

console.log(Utils.insertLine("// --- References ---", { topBreakLines: 1 }));

let user = {
  name: "John",
  age: 30
};

let admin = user;
user = null;

console.log("admin", "|", admin); // it should be the original object
console.log("user", "|", user); // null
