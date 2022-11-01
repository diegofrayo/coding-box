const Utils = require("../src/utils");

function main() {
  const baseExamples = [
    {
      description: `\\: (backslash) to escape special characters`,
      regex: /a\.b/,
      inputs: ["a.b", "aa.bb.", "ab"],
    },
    {
      description: `\\d: any digit between 0 and 9 | \\d = [0-9]`,
      regex: /\d/,
      inputs: ["1a.b", "aa.2bb.", "ab"],
    },
    {
      description: `\\w: (all word characters) a to z, A to Z, _ (underscore) | \\w = [0-9a-zA-Z]`,
      regex: /[0-9a-zA-Z]/,
      inputs: ["5", "b", "G", "1a", "aB", "1A", "1A{][]}", "", "^"],
    },
    {
      description: `\\s: (whitespaces)`,
      regex: /\s/,
      inputs: ["1a.b", "aa .2bb.", "", "."],
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
      inputs: ["123 343 kfjekjfre 9", "aa32 .2bb.", "23", ".c3", "2", "s 2"],
    },
    {
      description: `.+: any single character (One or more of a, input does not have to start with a, it takes all)`,
      regex: /\d+/,
      inputs: ["123 d 343 hf 9", "aa32 .2bb.", "23", ".c3 jd3", "2", "s 2"],
    },
    {
      description: `.?: any single character (Zero or one of a, input has to start with a, it takes only one match)`,
      regex: /\d?/,
      inputs: ["123 d 343 hf 9", "aa32 .2bb.", "23", ".c3 jd3", "2", "s 2"],
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
      ],
      resultExtractor(matches, match) {
        return match ? `${Utils.toString(matches.slice(1, 3))}` : matches;
      },
    },
  ];

  logTestExamples(baseExamples);
  logSearchExamples(baseExamples, { match: true });
  logSearchExamples(baseExamples, { matchWithGlobal: true });
  logSearchExamples(baseExamples, { matchAll: true });
  logSearchExamples(baseExamples, { exec: true });

  // Review results so far:
  // document methods return
  // match: Returns an array with all captouring groups. I just need [1] index
  // matchGlobal: Returns an array with the whole match string
  // matchAll: the same as matchGlobal
  // exec: ???

  // Then:
  // {min, max}
  // {exact}
  // {min,} // min to infinite
  // [xa\d\w]? existe o no

  // Issues:
  // .match \d?g empty strings returned weird
  // .match \d*g empty strings returned weird

  // Material:
  // https://platzi.com/clases/1301-expresiones-regulares/11852-los-delimitadores/
  // https://www.notion.so/diegofrayo/Regex-2c0e37844b7f4b70b181204519e33a95
  // https://rubular.com/
  // https://cheatography.com/davechild/cheat-sheets/regular-expressions/
}

main();

module.exports = main;

// --- Utils ---

function logTestExamples(examples) {
  let output = Utils.insertLine(`// ### ".test" examples ###`);

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

  Utils.writeOutput("regex-test.js", output);
}

function logSearchExamples(
  examples,
  {
    match = false,
    matchWithGlobal = false,
    matchAll = false,
    exec = false,
  } = {}
) {
  let output = Utils.insertLine(
    `// ### ${
      exec
        ? ".exec"
        : `.match${matchWithGlobal ? "(withGlobal) " : matchAll ? "All" : ""}`
    } examples ###`,
    { breakLines: 2 }
  );

  examples.forEach((example, index) => {
    const regexName = `regex${index + 1}`;
    const resultExtractor =
      example.resultExtractor ||
      ((matches) => {
        return matches;
      });

    output += Utils.insertLine(`// {${example.description}}`);
    output += Utils.insertLine(Utils.variable(regexName, example.regex));

    example.inputs.forEach((input) => {
      const inputEscaped = Utils.escapeString(input);
      const regex =
        matchWithGlobal || matchAll || exec
          ? new RegExp(example.regex, "g")
          : example.regex;

      if (exec) {
        output += Utils.insertLine(
          Utils.consoleLog(
            `${regex}.exec("${inputEscaped}")`,
            Utils.toString(
              resultExtractor(
                execRegex(regex, input),
                match,
                matchWithGlobal,
                matchAll,
                exec
              )
            )
          )
        );
      } else {
        output += Utils.insertLine(
          Utils.consoleLog(
            `"${inputEscaped}".${matchAll ? "matchAll" : "match"}(${regex})`,
            Utils.toString(
              resultExtractor(
                matchAll
                  ? [...input.matchAll(regex)].map((i) => i[0])
                  : input.match(regex),
                match,
                matchWithGlobal,
                matchAll,
                exec
              )
            )
          )
        );
      }
    });

    output += Utils.insertLine("");
  });

  console.log(output);

  Utils.writeOutput(
    `regex${
      matchWithGlobal
        ? "-match-global"
        : matchAll
        ? "-match-all"
        : exec
        ? "-exec"
        : "-match"
    }.js`,
    output
  );
}

function execRegex(regex, input) {
  const finalResult = [];
  let execResult = regex.exec(input);

  while (execResult && execResult[0]) {
    finalResult.push({ match: execResult[0], index: execResult.index });
    execResult = regex.exec(input);
    console.log(execResult);
  }

  return finalResult;
}
