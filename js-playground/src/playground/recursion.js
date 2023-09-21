function fromZeroToNumberWithLoops(number) {
  const result = [];

  for (let index = 0; index <= number; index++) {
    result.push(index);
  }

  return result;
}

log("fromZeroToNumberWithLoops", fromZeroToNumberWithLoops, [5]);

function fromZeroToNumber(number, array) {
  if (number === 0) {
    return [number];
  }

  return array.concat([...fromZeroToNumber(number - 1, array), number]);
}

log("fromZeroToNumber", fromZeroToNumber, [5, []]);

// --- --- --- ---

function sumWithLoops(number) {
  let result = 0;

  for (let index = 0; index <= number; index++) {
    result += index;
  }

  return result;
}

log("sumWithLoops", sumWithLoops, [5]);

function sum(number) {
  if (number === 0) {
    return number;
  }

  return sum(number - 1) + number;
}

log("sum", sum, [5]);

// --- --- --- ---

function printWithLoops(number) {
  for (let index = 0; index <= number; index++) {
    console.log(index);
  }
}

log("printWithLoops", printWithLoops, [5]);

function print(number) {
  if (number === 0) {
    console.log(number);
    return;
  }

  print(number - 1);
  console.log(number);
}

log("print", print, [5]);

// --- --- --- ---

function printInvertedWithLoops(number) {
  for (let index = number; index >= 0; index--) {
    console.log(index);
  }
}

log("printInvertedWithLoops", printInvertedWithLoops, [5]);

function printInverted(number) {
  console.log(number);

  if (number === 0) {
    return;
  }

  printInverted(number - 1);
}

log("printInverted", printInverted, [5]);

// --- --- --- ---

function numberOfDigitsWithLoops(number) {
  let counter = number === 0 ? 1 : 0;

  while (number > 0) {
    number = (number - (number % 10)) / 10;
    counter++;
  }

  return counter;
}

log("numberOfDigitsWithLoops", numberOfDigitsWithLoops, [
  [5],
  [0],
  [1],
  [9],
  [10],
  [11],
  [1000],
  [100100]
]);

function numberOfDigits(number) {
  if (number < 10) {
    return 1;
  }

  return numberOfDigits((number - (number % 10)) / 10) + 1;
}

log("numberOfDigits", numberOfDigits, [
  [5],
  [0],
  [1],
  [9],
  [10],
  [11],
  [1000],
  [100100]
]);

// --- --- --- ---

function factorialWithLoops(number) {
  let result = number === 0 ? 0 : 1;

  for (let index = 1; index <= number; index++) {
    result *= index;
  }

  return result;
}

log("factorialWithLoops", factorialWithLoops, [[5], [0], [1], [3], [4]]);

function factorial(number) {
  if (number === 0) {
    return 0;
  }

  if (number === 1) {
    return 1;
  }

  return factorial(number - 1) * number;
}

log("factorial", factorial, [[5], [0], [1], [3], [4]]);

// --- --- --- ---

function powWithLoops(base, pow) {
  let result = 1;

  for (let index = 1; index <= pow; index++) {
    result *= base;
  }

  return result;
}

log("powWithLoops", powWithLoops, [
  [2, 0],
  [2, 1],
  [2, 2],
  [2, 3],
  [2, 4]
]);

function pow(base, powNumber) {
  if (powNumber === 0) {
    return 1;
  }

  return pow(base, powNumber - 1) * base;
}

log("pow", pow, [
  [2, 0],
  [2, 1],
  [2, 2],
  [2, 3],
  [2, 4]
]);

// --- --- --- ---

function reverseNumberWithLoops(number) {
  let result = number === 0 ? number : "";

  while (number > 0) {
    result += number % 10;
    number = (number - (number % 10)) / 10;
  }

  return result;
}

log("reverseNumberWithLoops", reverseNumberWithLoops, [
  [0],
  [1],
  [10],
  [1010],
  [10000],
  [10003464]
]);

function reverseNumber(number) {
  if (number < 10) {
    return number + "";
  }

  const result = number % 10;

  return result + reverseNumber((number - (number % 10)) / 10);
}

log("reverseNumber", reverseNumber, [
  [0],
  [1],
  [10],
  [1010],
  [10000],
  [10003464]
]);

// --- --- --- ---

function fibonacciWithLoops(number) {
  let a = 0;
  let b = 1;
  let c = 0;
  let i = 0;

  while (i < number) {
    c = a + b;
    b = a;
    a = c;
    i++;
  }

  return c;
}

log("fibonacciWithLoops", fibonacciWithLoops, [
  [0],
  [1],
  [2],
  [3],
  [4],
  [5],
  [6],
  [7]
]);
// 0, 1, 1, 2, 3, 5, 8, 13

function fibonacci(number, index = 0, a = 0, b = 1) {
  if (index === number) {
    return a;
  }

  return fibonacci(number, ++index, a + b, a);
}

log("fibonacci", fibonacci, [[0], [1], [2], [3], [4], [5], [6], [7]]);
// 0, 1, 1, 2, 3, 5, 8, 13

function fibonacciFirstVersion(input) {
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

function fibonacciFromInternet(n) {
  if (n < 2) {
    return n;
  }

  return fibonacciFromInternet(n - 1) + fibonacciFromInternet(n - 2);
}

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
