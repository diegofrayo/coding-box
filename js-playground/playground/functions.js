let example1 = {
  firstName: "Ilya",
  sayHi() {
    console.log(this); // this is example1 value

    let arrow = () => {
      // this is the example1 value because arrow functions does not have
      // its own 'this' value, these functions search for the outer context
      console.log(this.firstName);
    };

    arrow();
  },
};

example1.sayHi(); // ✅ Ilya

// ---

let example3 = {
  firstName: "Ilya",
  sayHi() {
    console.log(this); // this is example1 value

    let arrow = function () {
      console.log(this); // it is an independent and new "this", it's not example1 value
      console.log(this.firstName); // undefined
    };

    // It is necessary so that arrow function prints "firstName" property correctly
    // arrow = arrow.bind(this);

    arrow();
  },
};

example3.sayHi(); // undefined
