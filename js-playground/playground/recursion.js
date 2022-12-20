function fromZeroToNumber1(number, array) {
  if (number === 0) {
    array.push(number);
    return number;
  }

  fromZeroToNumber1(number - 1, array);
  array.push(number);

  return number;
}

let array = [];
log("fromZeroToNumber1", fromZeroToNumber1, [5, array], array);

// --- --- --- ---

function fromZeroToNumber2(number, array) {
  if (number === 0) {
    array.push(number);
    return [number];
  }

  fromZeroToNumber2(number - 1, array);
  array.push(number);

  return array;
}

log("fromZeroToNumber2", fromZeroToNumber2, [5, []]);

// --- --- --- ---

function sum(number) {
  if (number === 1) {
    return number;
  }

  return sum(number - 1) + number;
}

log("sum", sum, [6]);

// --- --- --- ---

function print(number) {
  if (number === 1) {
    console.log(number);
    return;
  }

  print(number - 1);
  console.log(number);
}

log("print", print, [5]);

// --- --- --- ---

function printInverted(number) {
  console.log(number);

  if (number === 1) {
    return;
  }

  printInverted(number - 1);
}

log("printInverted", printInverted, [5]);

// --- --- --- ---

function numberOfDigits(number) {
  if (number < 10) {
    return 1;
  }

  return numberOfDigits(number / 10) + 1;
}

log("numberOfDigits", numberOfDigits, [133]);

// --- --- --- ---

function factorial(number) {
  if (number === 1) {
    return 1;
  }

  return factorial(number - 1) * number;
}

log("factorial", factorial, [7]);

// --- --- --- ---

function pow(base, exp) {
  if (exp <= 1) {
    return base * exp;
  }

  return base * pow(base, exp - 1);
}

log("pow", pow, [2, 5]);

// --- --- --- ---

function reverseNum(num) {
  if (num < 10) {
    return num + "";
  }

  return (num % 10) + reverseNum((num - (num % 10)) / 10);
}

log("reverseNum", reverseNum, [
  [1030],
  [1],
  [20],
  [10],
  [0],
  [10003],
  [10000],
  [1010],
]);

// --- --- --- ---

function fibonacciWithLoops(number) {
  let a = 0;
  let b = 1;
  let c = 0;
  let result = "";

  for (let index = 0; index < number; index++) {
    c = a + b;
    b = a;
    a = c;
    result += c + " ";
  }

  return result;
}

log("fibonacciWithLoops", fibonacciWithLoops, [7]);

// --- --- --- ---

function fibonacciSimple(n) {
  if (n < 2) {
    return n;
  }

  return fibonacciSimple(n - 1) + fibonacciSimple(n - 2);
}

log("fibonacciSimple", fibonacciSimple, [7]);

// --- --- --- ---

function fibonacciWithRecursion(input) {
  function innerFn(input1, input2, currentIteration, input) {
    let a = input1;
    let b = input2;
    let c = a + b;
    b = a;
    a = c;

    if (currentIteration === input) {
      return c;
    }

    return c + " " + innerFn(a, b, ++currentIteration, input);
  }

  return innerFn(0, 1, 1, input);
}

log("fibonacciWithRecursion", fibonacciWithRecursion, [7]);

// --- Utils ---

function log(name, fn, params, finalResult) {
  if (!isArrayOfArray(params)) {
    params = [params];
  }

  params.forEach((param, index) => {
    if (index === 0) console.log(`${name}:`);

    const result = fn(...param);

    if (finalResult) {
      console.log("  input:", param, "|", "output:", finalResult);
    } else if (result !== undefined) {
      console.log("  input:", param, "|", "output:", result);
    }
  });

  console.log();
}

function isArrayOfArray(array) {
  return (
    Array.isArray(array) && array.filter(Array.isArray).length === array.length
  );
}

// Some examples: https://aulaenlanube.com/zona-programacion/java/ejercicios-recursividad-java
