const {
  insertLine,
  bold,
  code,
  link,
  pre,
  toString,
  writeOutput,
} = require("../src/utils");

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
        callback: (originalInput) => originalInput.splice(1),
      },
      {
        description: "delete one element (the second one)",
        method: ".splice(1, 1)",
        originalInput: getExampleArray(),
        callback: (originalInput) => originalInput.splice(1, 1),
      },
      {
        description: "delete three elements (from the second one)",
        method: ".splice(1, 3)",
        originalInput: getExampleArray(),
        callback: (originalInput) => originalInput.splice(1, 3),
      },
      {
        description: "insert one element after second element",
        method: `.splice(2, 0, "b.a")`,
        originalInput: getExampleArray(),
        callback: (originalInput) => originalInput.splice(2, 0, "b.a"),
      },
      {
        description: "insert two elements after third elements",
        method: `.splice(3, 0, "c.a", "c.b")`,
        originalInput: getExampleArray(),
        callback: (originalInput) => originalInput.splice(3, 0, "c.a", "c.b"),
      },
      {
        description: "",
        method: `.splice(0)`,
        originalInput: getExampleArray(),
        callback: (originalInput) => originalInput.splice(0),
      },
      {
        description: "",
        method: `.splice(${getExampleArray().length - 1})`,
        originalInput: getExampleArray(),
        callback: (originalInput) =>
          originalInput.splice(originalInput.length - 1),
      },
      {
        description: "",
        method: `.splice(-1)`,
        originalInput: getExampleArray(),
        callback: (originalInput) => originalInput.splice(-1),
      },
      {
        description: "",
        method: `.splice(${getExampleArray().length})`,
        originalInput: getExampleArray(),
        callback: (originalInput) => originalInput.splice(originalInput.length),
      },
    ],
  };

  writeOutput(splice.method, logExample(splice));
}

main();

module.exports = main;

// --- Utils ---

function getExampleArray() {
  return ["a", "b", "c", "d", "e"];
}

function logExample(input) {
  let output = ``;

  output += insertLine(`# ${input.method}`, { breakLines: 2 });
  output += insertLine(`- ${bold("Mutative:")} ${code(input.mutative)}`, {
    indent: 0,
  });
  output += insertLine(`- ${bold("Description:")} ${input.description}`, {
    indent: 0,
  });
  output += insertLine(`- ${bold("Docs:")} ${link(input.docs)}`, {
    indent: 0,
  });
  output += insertLine(`- ${bold("Syntax:")}`, { indent: 0 });
  output += insertLine(`${pre(input.syntax, 2)}`, { indent: 2 });
  output += insertLine(`- ${bold("Examples:")}`, { indent: 0 });

  input.examples.forEach((example, index) => {
    output += insertLine(
      `- ${bold(`Test ${index + 1}:`)} ${code(
        `${toString(example.originalInput)}${example.method}`
      )}`,
      {
        indent: 1,
      }
    );

    output += insertLine(`- ${bold("Description:")} ${example.description}`, {
      indent: 2,
    });
    output += insertLine(`- ${bold("Input:")} ${code(example.originalInput)}`, {
      indent: 2,
    });
    output += insertLine(
      `- ${bold("Return:")} ${code(example.callback(example.originalInput))}`,
      {
        indent: 2,
      }
    );
    output += insertLine(
      `- ${bold("Mutated input:")} ${code(example.originalInput)}`,
      {
        indent: 2,
      }
    );
  });

  console.log(output);

  return output;
}
