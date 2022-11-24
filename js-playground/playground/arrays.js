const Utils = require("../src/utils");

function main() {
  const splice = {
    method: "splice",
    description: "removing/replacing/adding new items",
    mutative: true,
    docs: {
      text: ".splice | MDN",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice",
    },
    syntax: `
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)
`,
    examples: [
      {
        description: "delete all elements from a given start index",
        method: ".splice(1)",
        originalInput: getExampleArray(),
      },
      {
        description: "delete one element (the second one)",
        method: ".splice(1, 1)",
        originalInput: getExampleArray(),
      },
      {
        description: "delete three elements (from the second one)",
        method: ".splice(1, 3)",
        originalInput: getExampleArray(),
      },
      {
        description: "insert one element after second element",
        method: `.splice(2, 0, "b.a")`,
        originalInput: getExampleArray(),
      },
      {
        description: "insert two elements after third elements",
        method: `.splice(3, 0, "c.a", "c.b")`,
        originalInput: getExampleArray(),
      },
      {
        description: "firstIndex",
        method: `.splice(0)`,
        originalInput: getExampleArray(),
      },
      {
        description: "lastIndex",
        method: `.splice(${getExampleArray().length - 1})`,
        originalInput: getExampleArray(),
      },
      {
        description: "negativeIndex",
        method: `.splice(-1)`,
        originalInput: getExampleArray(),
      },
      {
        description: "indexOutOfBounds",
        method: `.splice(${getExampleArray().length})`,
        originalInput: getExampleArray(),
      },
    ],
  };

  Utils.writeOutput(splice.method + ".js", logExample(splice));
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
  - Mutative: ${input.mutative}
  - Description: ${input.description}
  - Docs: ${Utils.link(input.docs)}
  - Syntax:
    ${Utils.pre(input.syntax, {
      indent: 2,
      withoutTemplateLiterals: true,
    })}
*/`,
    { breakLines: 2 }
  );

  input.examples.forEach((example, index) => {
    const inputName = `input${index + 1}`;

    output += Utils.insertLine(Utils.comment(`{${example.description}}`), {
      breakLines: 1,
    });
    output += Utils.insertLine(
      Utils.variable(inputName, Utils.toString(example.originalInput))
    );

    const { methodName, methodParams } = Utils.parseMethodCall(example.method);
    console.log(methodName, methodParams);
    output += Utils.insertLine(
      Utils.consoleLog(
        `${inputName}${example.method}`,
        example.originalInput[methodName](...methodParams)
      )
    );

    output += Utils.insertLine(
      Utils.consoleLog(inputName, example.originalInput),
      {
        breakLines: index === input.examples.length - 1 ? 0 : 2,
      }
    );
  });

  console.log(output);

  return output;
}
