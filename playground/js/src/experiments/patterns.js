// ### ### ###  ### ### ### ###
// Implementation using objects
// ### ### ###  ### ### ### ###

const MySingletonWithFunction = (() => {
  let instance = null;

  function constructor() {
    return {
      name: "Diego",
      printName() {
        return this.name;
      }
    };
  }

  return {
    getInstance() {
      if (instance === null) {
        instance = constructor();
      }

      return instance;
    }
  };
})();

const MyServiceWithFunction = MySingletonWithFunction.getInstance();
// module.exports = MyServiceWithFunction;

// --- USAGE ---

// const MyServiceWithFunction = require("./my-singleton");

console.log(
  "MyServiceWithFunction.printName()",
  MyServiceWithFunction.printName()
);

// ### ### ###  ### ### ### ###
// Implementation using classes
// ### ### ###  ### ### ### ###

class MySingletonWithClass {
  static instance = null;
  name = "Diego";

  // it could be private
  constructor() {}

  printName() {
    return this.name;
  }

  static getInstance() {
    if (MySingletonWithClass.instance === null) {
      MySingletonWithClass.instance = new MySingletonWithClass();
    }

    return MySingletonWithClass.instance;
  }
}

const MyServiceWithClass = MySingletonWithClass.getInstance();
// module.exports = MyServiceWithClass;

// --- USAGE ---

// const MyServiceWithClass = require("./my-singleton");

console.log("MyServiceWithClass.printName()", MyServiceWithClass.printName());
