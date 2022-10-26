const { insertLine, bold, code, printObject } = require("../src/utils");

function main() {
  const splice = {
    method: "splice",
    description: "removing/replacing/adding new items",
    mutative: true,
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
    ],
  };
  logExample(splice);
}

main();

module.exports = main;

// --- Utils ---

function getExampleArray() {
  return ["a", "b", "c", "d", "e"];
}

function logExample(input) {
  let output = ``;

  output += insertLine(`# ${input.method}`);
  output += insertLine(`- ${bold("Mutative:")} ${code(input.mutative)}`, {
    indent: 2,
  });
  output += insertLine(`- ${bold("Description:")} ${input.description}`, {
    indent: 2,
  });
  output += insertLine(`- ${bold("Examples:")}`, { indent: 2 });

  input.examples.forEach((example, index) => {
    output += insertLine(
      `- ${bold(`Test ${index + 1}:`)} ${code(
        `${printObject(example.originalInput)}${example.method}`
      )}`,
      {
        indent: 3,
      }
    );

    output += insertLine(`- ${bold("Description:")} ${example.description}`, {
      indent: 4,
    });
    output += insertLine(`- ${bold("Input:")} ${code(example.originalInput)}`, {
      indent: 4,
    });
    output += insertLine(
      `- ${bold("Return:")} ${code(example.callback(example.originalInput))}`,
      {
        indent: 4,
      }
    );
    output += insertLine(
      `- ${bold("Mutated input:")} ${code(example.originalInput)}`,
      {
        indent: 4,
      }
    );
  });

  console.log(output);
}
