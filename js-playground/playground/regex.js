const Utils = require("../src/utils");

function main() {
  const baseExamples = [
    {
      enabled: true,
      description: `\\: (backslash) to escape special characters`,
      regex: /a\.b/,
      inputs: [
        { input: "123 a.b 123", shouldMatch: true },
        { input: "a.b c a.b", shouldMatch: true },
        { input: "a.b", shouldMatch: true },
        { input: "aa.bb", shouldMatch: true },

        { input: "", shouldMatch: false },
        { input: " a*b ", shouldMatch: false },
        { input: "ab", shouldMatch: false },
        { input: ".", shouldMatch: false },
      ],
    },
    {
      enabled: true,
      description: `\\d: any digit between 0 and 9 | \\d = [0-9]`,
      regex: /\d/,
      inputs: [
        { input: "1a2a3", shouldMatch: true },
        { input: "a 3", shouldMatch: true },
        { input: "3", shouldMatch: true },

        { input: "", shouldMatch: false },
        { input: " ", shouldMatch: false },
        { input: "r", shouldMatch: false },
      ],
    },
    {
      enabled: true,
      description: `\\w: (All word characters => [a-z], [A-Z], [0-9], [_]`,
      regex: /^[\w]+$/,
      inputs: [
        { input: "5jhdAe2", shouldMatch: true },
        { input: "_", shouldMatch: true },
        { input: "2", shouldMatch: true },
        { input: "sferwf", shouldMatch: true },
        { input: "123_ddDE_Ad", shouldMatch: true },

        { input: "123AAd frfr DFD", shouldMatch: false },
        { input: "1A{][]}", shouldMatch: false },
        { input: "b--$$$3", shouldMatch: false },
        { input: "", shouldMatch: false },
        { input: " ", shouldMatch: false },
        { input: "~!@#$%^&*()+", shouldMatch: false },
      ],
    },
    {
      enabled: true,
      description: `\\s: (whitespaces)`,
      regex: /\s/,
      inputs: [
        // { input: "a.b za.bz zabz", shouldMatch: true },
        // { input: "aa.b b.c", shouldMatch: true },
        // { input: "ab", shouldMatch: true },
        // { input: ".", shouldMatch: true },
        // { input: "43/ .34 drfr", shouldMatch: true },
      ],
    },
    {
      enabled: true,
      description: `\\n: (line-breaks)`,
      regex: /\n/,
      inputs: [
        // { input: "fdd\ndd", shouldMatch: true },
        // { input: "aa .2bb.", shouldMatch: true },
        // { input: "", shouldMatch: true },
        // { input: ".", shouldMatch: true },
      ],
    },
    {
      enabled: true,
      description: `.: any single character`,
      regex: /./,
      inputs: [
        // { input: "fdddd", shouldMatch: true },
        // { input: "aa .2bb.", shouldMatch: true },
        // { input: "", shouldMatch: true },
        // { input: ".c", shouldMatch: true },
        // { input: "2", shouldMatch: true },
        // { input: " ", shouldMatch: true },
      ],
    },
    {
      enabled: true,
      description: `.*: any single character (Zero or more of a, input has to start with a, it takes all)`,
      regex: /\d*/,
      inputs: [
        // { input: "123 343 kfjekjfre 9", shouldMatch: true },
        // { input: "aa32 .2b", shouldMatch: true },
        // { input: "jfe-=-m", shouldMatch: true },
        // { input: ".c3", shouldMatch: true },
        // { input: "2", shouldMatch: true },
        // { input: "s 2", shouldMatch: true },
      ],
    },
    {
      enabled: true,
      description: `.+: any single character (One or more of a, input does not have to start with a, it takes all)`,
      regex: /\d+/,
      inputs: [
        // { input: "123 343 kfjekjfre 9", shouldMatch: true },
        // { input: "aa32 .2b", shouldMatch: true },
        // { input: "jfe-=-m", shouldMatch: true },
        // { input: ".c3", shouldMatch: true },
        // { input: "2", shouldMatch: true },
        // { input: "s 2", shouldMatch: true },
      ],
    },
    {
      enabled: true,
      description: `.?: any single character (Zero or one of a, input has to start with a, it takes only one match [smallest possible])`,
      regex: /\d?/,
      inputs: [
        // { input: "123 343 kfjekjfre 9", shouldMatch: true },
        // { input: "aa32 .2b", shouldMatch: true },
        // { input: "jfe-=-m", shouldMatch: true },
        // { input: ".c3", shouldMatch: true },
        // { input: "2", shouldMatch: true },
        // { input: "s 2", shouldMatch: true },
      ],
    },
    {
      enabled: true,
      description: `.splice`,
      regex: /\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/,
      inputs: [
        { input: ".splice(1)", shouldMatch: true },
        { input: ".splice(1, 1)", shouldMatch: true },
        { input: ".splice(1, 3)", shouldMatch: true },
        { input: '.splice(2, 0, "b.a")', shouldMatch: true },
        { input: '.splice(3, 0, "c.a", "c.b")', shouldMatch: true },
        { input: ".splice(-1, 3)", shouldMatch: true },
        { input: ".splice(-1, -3)", shouldMatch: true },
        { input: ".splice(1, -3)", shouldMatch: true },
        { input: ".splice(-1)", shouldMatch: true },
        { input: ".splice()", shouldMatch: true },
      ],
    },
    {
      enabled: true,
      description: `{exact}: [Example => Colombian phone number]`,
      regex: /^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/,
      inputs: [
        { input: "3113728898", shouldMatch: true },
        { input: "311-372-8898", shouldMatch: true },
        { input: "311 372 8898", shouldMatch: true },
        { input: "+57 3113728898", shouldMatch: true },
        { input: "+57 311-372-8898", shouldMatch: true },
        { input: "+57 311 372 8898", shouldMatch: true },

        { input: "311372 8898", shouldMatch: false }, // TODO: It should not match
        { input: "311372-8898", shouldMatch: false }, // TODO: It should not match
        { input: "311372889", shouldMatch: false },
        { input: "4113728898", shouldMatch: false },
        { input: "3113728898s", shouldMatch: false },
        { input: "311-372-8898-", shouldMatch: false },
        { input: "+57311-372-8898", shouldMatch: false },
      ],
    },
    {
      enabled: true,
      description: `{min,max}: [Example => Zip code with numbers and its length between 3 and 6]`,
      regex: /^\d{3,6}$/,
      inputs: [
        { input: "123456", shouldMatch: true },
        { input: "12345", shouldMatch: true },
        { input: "1234", shouldMatch: true },
        { input: "123", shouldMatch: true },

        { input: "1234567", shouldMatch: false },
        { input: "12345c", shouldMatch: false },
        { input: "12", shouldMatch: false },
      ],
    },
    {
      enabled: true,
      description: `{min,}: Length equals or greater than min`,
      regex: /^\d{3,}$/,
      inputs: [
        { input: "12345", shouldMatch: true },
        { input: "1234", shouldMatch: true },
        { input: "123", shouldMatch: true },

        { input: "123c", shouldMatch: false },
        { input: "12", shouldMatch: false },
      ],
    },
    {
      enabled: true,
      description: `{min,max}: [Example => Password with digits, lowercase and uppercase letters and some special characters]`,
      regex: /([A-Z]+[a-z]+\d+)/,
      // TODO: This regex does not work yet \!\@\#\$\%\^\&\*
      inputs: [
        { input: "Diego123", shouldMatch: true },

        { input: "123diegoRayo", shouldMatch: false },
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

  // TODO
  // - Clean up the Regex note
  // - Update and enable all examples
  // - Difference between () and []
  // - Difference between [c,a] and (c|a)
  // - Finish TODOs

  // Issues:
  // .match \d?g empty strings returned weird (it's a normal behaviours because it is zero or more)
  // .match \d*g empty strings returned weird (it's a normal behaviours because it is zero or more)
  // .exec \d?g get into a infinite loop
  // .exec \d*g get into a infinite loop

  // Material:
  // https://platzi.com/clases/1301-expresiones-regulares/11855-not-su-uso-y-sus-peligros/
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

    example.inputs.forEach((item) => {
      const inputEscaped = Utils.escapeString(item.input);
      const matched = example.regex.test(item.input);

      output += Utils.insertLine(
        Utils.consoleLog(
          `${example.regex}.test("${inputEscaped}")`,
          `${matched && item.shouldMatch ? "✅" : "❌"} | ${matched}`,
          false
        )
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

    example.inputs.forEach((item) => {
      const inputEscaped = Utils.escapeString(item.input);
      const regex =
        isMatchWithGlobalVariant || isMatchAllVariant || isExecVariant
          ? new RegExp(example.regex, "g")
          : example.regex;

      if (isExecVariant) {
        const result = execRegex(regex, item.input);

        output += Utils.insertLine(
          Utils.consoleLog(
            `${regex}.exec("${inputEscaped}")`,
            `${
              result.length > 0 && item.shouldMatch ? "✅" : "❌"
            } | ${Utils.toString(result)}`,
            false
          )
        );
      } else {
        const result = isMatchAllVariant
          ? matchAllRegex(item.input.matchAll(regex))
          : item.input.match(regex);

        output += Utils.insertLine(
          Utils.consoleLog(
            `"${inputEscaped}".${
              isMatchAllVariant ? "matchAll" : "match"
            }(${regex})`,
            `${
              (result === null && item.shouldMatch === false) ||
              (Array.isArray(result) &&
                result.length > 0 &&
                item.shouldMatch === true)
                ? "✅"
                : "❌"
            } | ${Utils.toString(result)}`,
            false
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
