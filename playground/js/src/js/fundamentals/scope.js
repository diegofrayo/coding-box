// --- Global scope ---

/*
  var message = "This is a globar var";
  console.log(message); // "This is a globar var"
  window.message = "I'm rewriting a global var";
  console.log(message); // "I'm rewriting a global var"
*/

// --- Function scope ---

// - Example 1 -

function printNumbers1() {
  for (var i = 0; i < 10; i++) {
    /* NOTE:
     * It doesn't work as expected because setTimeout's callback function is created ten times,
     * but, all of these callbacks have the same "Lexical environment", for that reason, when
     * these callbacks log the "i" variable, the value will always be 10
     */
    setTimeout(function() {
      console.log("printNumbers1", i);
    }, 100);
  }

  /* NOTE:
   * It works because "i" variable is declared at the top of the "printNumbers1" function
   * despite visually it seems declared inside of the "for" loop
   */
  console.log("printNumbers1", "i", i); // ✅ Works
}

// Output
printNumbers1(); // 10...10 ❌

// - Example 2 -

function printNumbers2() {
  function eventuallyPrintNumber(n) {
    setTimeout(function() {
      console.log("printNumbers2", n);
    }, 300);
  }

  for (var i = 0; i < 10; i++) {
    /* NOTE:
     * This is a typical example of a closure
     * "i" variable value is saved for each time that "eventuallyPrintNumber" function is called
     */
    eventuallyPrintNumber(i);
  }
}

// Output
printNumbers2(); // 0...9 ✅

// --- Block scope ---

function printNumbers3() {
  for (let i = 0; i < 10; i++) {
    /* NOTE:
     * It works as expected because a callback is created for each iteration
     * and all these callbacks have their own "Lexical environment" and its parent scope is
     * the for loop block and each parent scope has its own "i" variable value
     */
    setTimeout(function() {
      console.log("printNumbers3", i);
    }, 700);
  }

  /* NOTE:
   * It does not work because "i" variable scope is a block scope (the "for" loop)
   * despite visually it seems declared outside of it
   */
  // console.log("printNumbers3", "i", i); // ReferenceError: i is not defined ❌
}

// Output
printNumbers3(); // 0...9 ✅

// --- Scope tests ---

// - Example 1 -

var y = 1;

function func2() {
  /* NOTE:
   * "y" value is undefined because the value is already declared but no initialized at the moment when
   * console.log is called
   */
  console.log("func2", "y", y); // OUTPUT: "func2", "y", undefined
  var y = 2;
}

func2();

// - Example 2 -

try {
  let x = 1;

  function func1() {
    /* NOTE:
     * Unlike "var" variables, you can't try to access to a "let" variable before its initialization
     */
    console.log("func1", "x", x); // ReferenceError: Cannot access 'x' before initialization
    let x = 2;
  }

  func1();
} catch (error) {
  console.log(error);
}
