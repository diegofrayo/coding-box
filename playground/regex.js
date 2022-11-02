const Utils = require("../src/utils");

function main() {
  const baseExamples = [
    {
      description: `\\: (backslash) to escape special characters`,
      regex: /a\.b/,
      inputs: ["a.b za.bz zabz", "aa.b b.c", "ab", ".", "43/ .34 drfr"],
    },
    {
      description: `\\d: any digit between 0 and 9 | \\d = [0-9]`,
      regex: /\d/,
      inputs: ["a.b za.bz zabz", "aa.b b.c", "ab", ".", "43/ .34 drfr"],
    },
    {
      description: `\\w: (all word characters) a to z, A to Z, _ (underscore) | \\w = [0-9a-zA-Z]`,
      regex: /[0-9a-zA-Z]/,
      inputs: ["5jhde2", "b--3", "aB.de- 3", " _ _ dd_", "1A{][]}", "", "^"],
    },
    {
      description: `\\s: (whitespaces)`,
      regex: /\s/,
      inputs: ["a.b za.bz zabz", "aa.b b.c", "ab", ".", "43/ .34 drfr"],
    },
    {
      description: `\\n: (line-breaks)`,
      regex: /\n/,
      inputs: ["fdd\ndd", "aa .2bb.", "", "."],
    },
    {
      description: `.: any single character`,
      regex: /./,
      inputs: ["fdddd", "aa .2bb.", "", ".c", "2", " "],
    },
    {
      description: `.*: any single character (Zero or more of a, input has to start with a, it takes all)`,
      regex: /\d*/,
      inputs: ["123 343 kfjekjfre 9", "aa32 .2b", "jfe-=-m", ".c3", "2", "s 2"],
    },
    {
      description: `.+: any single character (One or more of a, input does not have to start with a, it takes all)`,
      regex: /\d+/,
      inputs: ["123 343 kfjekjfre 9", "aa32 .2b", "jfe-=-m", ".c3", "2", "s 2"],
    },
    {
      description: `.?: any single character (Zero or one of a, input has to start with a, it takes only one match)`,
      regex: /\d?/,
      inputs: ["123 343 kfjekjfre 9", "aa32 .2b", "jfe-=-m", ".c3", "2", "s 2"],
    },
    {
      description: `.splice`,
      regex: /\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/,
      inputs: [
        `.splice(1)`,
        `.splice(1, 1)`,
        `.splice(1, 3)`,
        `.splice(2, 0, "b.a")`,
        `.splice(3, 0, "c.a", "c.b")`,
        `.splice(-1, 3)`,
        `.splice(-1, -3)`,
        `.splice(1, -3)`,
        `.splice(-1)`,
        `.splice()`,
      ],
    },
  ];

  logTestExamples(baseExamples, {
    enabled: true,
    title: ".test",
    documentation: `
      - Return: boolean
      - Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
    `,
    outputFile: "test",
  });
  logSearchExamples(baseExamples, {
    enabled: true,
    variant: "match",
    title: ".match",
    documentation: `
      - Return: ["firstMatchFound"] | ["the first complete match and its related capturing groups are returned"] | null
      - Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@match#return_value
    `,
    outputFile: "match",
  });
  logSearchExamples(baseExamples, {
    enabled: true,
    variant: "matchWithGlobalFlag",
    title: ".match [g flag]",
    documentation: `
      - Return: ["all matches"] | ["the first complete match but no its related capturing groups"] | null
      - Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@match#return_value
    `,
    outputFile: "match-g-flag",
  });
  logSearchExamples(baseExamples, {
    enabled: true,
    variant: "matchAll",
    title: ".matchAll",
    documentation: `
      - Note: The regex passed must have the "g" flag, otherwise, an error is thrown
      - Return: RegExpStringIterator => ["all matches"] | ["the first complete match and its related capturing groups are returned"] | []
      - Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll
    `,
    outputFile: "match-all",
  });
  logSearchExamples(baseExamples, {
    enabled: true,
    variant: "exec",
    title: ".exec",
    documentation: `
      - Note: The regex passed must have the "g" flag, otherwise, you could get into a infinite loop
      - Return: The same as ".matchAll", but each item found is an array with some useful properties like "index"
      - Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
    `,
    outputFile: "exec",
  });

  // Make some examples:
  // {min, max}
  // {exact}
  // {min,} // min to infinite
  // [xa\d\w]? existe o no

  // Issues:
  // .match \d?g empty strings returned weird (it's a normal behaviours because it is zero or more)
  // .match \d*g empty strings returned weird (it's a normal behaviours because it is zero or more)
  // .exec \d?g get into a infinite loop
  // .exec \d*g get into a infinite loop

  // Material:
  // https://platzi.com/clases/1301-expresiones-regulares/11854-el-caso-de-como-delimitador/
  // https://www.notion.so/diegofrayo/Regex-2c0e37844b7f4b70b181204519e33a95
  // https://rubular.com/
  // https://cheatography.com/davechild/cheat-sheets/regular-expressions/
}

main();

module.exports = main;

// --- Utils ---

function logTestExamples(
  examples,
  { enabled = false, title, documentation, outputFile } = {}
) {
  if (!enabled) return;

  let output = ``;

  output += Utils.insertLine(`// ### "${title}" examples ###`, {
    breakLines: 2,
  });
  output += Utils.insertLine(`/*${documentation}*/`, {
    breakLines: 2,
    deleteIndentation: 1,
  });

  examples.forEach((example, index) => {
    const regexName = `regex${index + 1}`;

    output += Utils.insertLine(`// {${example.description}}`);
    output += Utils.insertLine(Utils.variable(regexName, example.regex));

    example.inputs.forEach((input) => {
      const inputEscaped = Utils.escapeString(input);

      output += Utils.insertLine(
        `${Utils.consoleLog(
          `${example.regex}.test("${inputEscaped}")`,
          example.regex.test(input)
        )} `
      );
    });

    output += Utils.insertLine("");
  });

  console.log(output);

  Utils.writeOutput(`regex-${outputFile}.js`, output);
}

function logSearchExamples(
  examples,
  { enabled = false, variant, title, documentation, outputFile } = {}
) {
  if (!enabled) return;

  const isMatchWithGlobalVariant = variant === "matchWithGlobalFlag";
  const isMatchAllVariant = variant === "matchAll";
  const isExecVariant = variant === "exec";

  let output = ``;

  output += Utils.insertLine(`// ### "${title}" examples ###`, {
    breakLines: 2,
  });
  output += Utils.insertLine(`/*${documentation}*/`, {
    breakLines: 2,
    deleteIndentation: 1,
  });

  examples.forEach((example, index) => {
    const regexName = `regex${index + 1}`;

    output += Utils.insertLine(`// {${example.description}}`);
    output += Utils.insertLine(Utils.variable(regexName, example.regex));

    example.inputs.forEach((input) => {
      const inputEscaped = Utils.escapeString(input);
      const regex =
        isMatchWithGlobalVariant || isMatchAllVariant || isExecVariant
          ? new RegExp(example.regex, "g")
          : example.regex;

      if (isExecVariant) {
        output += Utils.insertLine(
          Utils.consoleLog(
            `${regex}.exec("${inputEscaped}")`,
            Utils.toString(execRegex(regex, input))
          )
        );
      } else {
        output += Utils.insertLine(
          Utils.consoleLog(
            `"${inputEscaped}".${
              isMatchAllVariant ? "matchAll" : "match"
            }(${regex})`,
            Utils.toString(
              isMatchAllVariant
                ? matchAllRegex(input.matchAll(regex))
                : input.match(regex)
            )
          )
        );
      }
    });

    output += Utils.insertLine("");
  });

  console.log(output);

  Utils.writeOutput(`regex-${outputFile}.js`, output);
}

function execRegex(regex, input) {
  const finalResult = [];
  let execResult = regex.exec(input);

  // NOTE: I check this "execResult[0]" to avoid getting a infinite loop, I don't understand the cause yet
  while (execResult && execResult[0]) {
    finalResult.push(execResult);
    execResult = regex.exec(input);
  }

  return finalResult;
}

function matchAllRegex(result) {
  return [...result];
}
