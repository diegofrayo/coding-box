const Utils = require("../src/utils");

function main() {
  const addingElements = {
    fileName: "array-adding-elements.js",
    description: "Adding elements",
    examples: [
      {
        mutative: false,
        description: "add element at the end of the array",
        method: `.concat(["f"])`,
        originalInput: getExampleArray(),
      },
      {
        mutative: true,
        description: "add element at the end of the array",
        method: `.push("f")`,
        originalInput: getExampleArray(),
      },
      {
        mutative: true,
        description: "add element at the beginning of the array",
        method: `.unshift("0")`,
        originalInput: getExampleArray(),
      },
      {
        mutative: true,
        description: "add element at a given position",
        method: `.splice(2, 0, "b.a")`,
        originalInput: getExampleArray(),
      },
    ],
  };

  const removingElements = {
    fileName: "array-removing-elements.js",
    description: "Removing elements",
    examples: [
      () => {
        const originalInput = getExampleArray();

        return {
          mutative: false,
          description: "remove by element value",
          method: [(input) => `${input}.filter(element => element !== 'a')`],
          methodResult: [
            () => originalInput.filter((element) => element !== "a"),
            originalInput,
          ],
        };
      },
      {
        mutative: true,
        description: "remove by index",
        method: `.splice(2, 1)`,
        originalInput: getExampleArray(),
      },
      {
        mutative: true,
        description: "remove the first element",
        method: `.shift()`,
        originalInput: getExampleArray(),
      },
      {
        mutative: true,
        description: "remove the last element",
        method: `.pop()`,
        originalInput: getExampleArray(),
      },
    ],
  };

  const updatingElements = {
    fileName: "array-updating-elements.js",
    description: "Updating elements",
    examples: [
      () => {
        const originalInput = getExampleArray();

        return {
          mutative: true,
          description: "Update by index",
          method: [(input) => `${input}[0] = "firstElement"`],
          methodResult: [
            () => (originalInput[0] = "firstElement"),
            originalInput,
          ],
        };
      },
      () => {
        const originalInput = getExampleArray();

        return {
          mutative: false,
          description: "Update by value",
          method: [
            (input) =>
              `${input}.map((element) => element === "a" ? "AAA" : element)`,
          ],
          methodResult: [
            () =>
              originalInput.map((element) =>
                element === "a" ? "AAA" : element
              ),
          ],
          originalInput,
        };
      },
      {
        mutative: true,
        description: "replacing",
        method: `.splice(2, 1, "X")`,
        originalInput: getExampleArray(),
      },
    ],
  };

  const subsets = {
    fileName: "array-subsets.js",
    description: "Subsets",
    examples: [
      () => {
        const originalInput = getExampleArray();

        return {
          mutative: false,
          description: "Subset with a given start and end",
          method: [(input) => `${input}.slice(1, ${input}.length - 1)`],
          methodResult: [
            () => originalInput.slice(1, originalInput.length - 1),
          ],
          originalInput,
        };
      },
      () => {
        const originalInput = getExampleArray();

        return {
          mutative: true,
          description: "Subset with a given start and end",
          method: [
            (input) => `${input}.splice(${input}.length - 1, 1)`,
            (input) => `${input}.splice(0, 1)`,
          ],
          methodResult: [
            () => originalInput.splice(originalInput.length - 1, 1),
            () => originalInput.splice(0, 1),
          ],
          originalInput,
        };
      },
    ],
  };

  const mutatives = {
    fileName: "array-mutative-methods.js",
    description: "Mutatives",
    examples: [
      {
        mutative: true,
        description: "sort",
        method: `.sort()`,
        originalInput: getExampleArray().reverse(),
      },
      {
        mutative: true,
        description: "reverse",
        method: `.reverse()`,
        originalInput: getExampleArray(),
      },
    ],
  };

  Utils.writeOutput(addingElements.fileName, logExample(addingElements));
  Utils.writeOutput(removingElements.fileName, logExample(removingElements));
  Utils.writeOutput(updatingElements.fileName, logExample(updatingElements));
  Utils.writeOutput(subsets.fileName, logExample(subsets));
  Utils.writeOutput(mutatives.fileName, logExample(mutatives));
}

main();

module.exports = main;

// --- Utils ---

function getExampleArray() {
  return ["a", "b", "c", "d", "e"];
}

function logExample(input) {
  let output = ``;

  output += Utils.insertLine(
    `/*
* --- ${input.description} ---
*/`,
    { breakLines: 2 }
  );

  input.examples.forEach((exampleInput, index) => {
    const inputName = `input${index + 1}`;
    const example =
      typeof exampleInput === "function" ? exampleInput() : exampleInput;

    output += Utils.insertLine(
      Utils.comment(`Description: {${example.description}}`),
      {
        breakLines: 1,
      }
    );
    output += Utils.insertLine(
      Utils.comment(`Mutative: {${example.mutative}}`),
      {
        breakLines: 1,
      }
    );
    output += Utils.insertLine(
      Utils.variable(inputName, Utils.toString(example.originalInput))
    );

    if (example.methodResult) {
      example.method.forEach((item, index) => {
        output += Utils.insertLine(
          Utils.consoleLog(`${item(inputName)}`, example.methodResult[index]())
        );
      });
    } else {
      const { methodName, methodParams } = parseMethodCall(example.method);

      output += Utils.insertLine(
        Utils.consoleLog(
          `${inputName}${example.method}`,
          example.originalInput[methodName](...methodParams)
        )
      );
    }

    output += Utils.insertLine(
      Utils.consoleLog(inputName, example.originalInput),
      {
        breakLines: index === input.examples.length - 1 ? 0 : 2,
      }
    );
  });

  return output;
}

function parseMethodCall(input) {
  // TODO: Enable someday
  // const result = input
  //   .match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/)
  //   ?.slice(1, 3);
  // if (!result) {
  //   throw new Error("Error with " + input);
  // }

  // return {
  //   methodName: result[0],
  //   methodParams: result[1].split(",").map((i) => {
  //     return Number.isInteger(Number(i))
  //       ? Number(i)
  //       : replaceAll(i.trim(), '"', "");
  //   }),
  // };

  const methodName = input.split("(")[0].replace(".", "");
  let methodParams = input.substring(methodName.length + 1);
  methodParams = methodParams.substring(1, methodParams.length - 1);

  return {
    methodName,
    methodParams: methodParams
      ? methodParams.split(",").map((param) => {
          if (Number.isInteger(Number(param))) {
            return Number(param);
          }

          let parsedParam = param;
          parsedParam = Utils.replaceAll(parsedParam.trim(), '"', "");

          if (methodName === "concat") {
            parsedParam = Utils.replaceAll(
              Utils.replaceAll(parsedParam, "[", ""),
              "]",
              ""
            );
          }

          return parsedParam;
        })
      : [],
  };
}
