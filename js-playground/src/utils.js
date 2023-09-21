const fs = require("fs");
const path = require("path");

// --- OUTPUT FORMATTING ---

function insertLine(
  content,
  { indent = 0, breakLines = 1, deleteIndentation = 0, topBreakLines = 0 } = {}
) {
  const line = `${generateBreakLines(topBreakLines)}${generateIndentation(
    indent
  )}${content}${generateBreakLines(breakLines)}`;

  if (deleteIndentation === 0) {
    return line;
  }

  return `${replaceAll(
    line,
    createArray(deleteIndentation)
      .map(i => "  ")
      .join(""),
    ""
  )}`;
}

function generateBreakLines(breakLines) {
  return createArray(breakLines)
    .map(i => "\n")
    .join("");
}

function generateIndentation(indent) {
  return createArray(indent * 2)
    .map(i => " ")
    .join("");
}

function bold(content) {
  return `**${content}**`;
}

function code(content) {
  return `\`${toString(content)}\``;
}

function pre(content, { indent = 0, withoutTemplateLiterals = false } = {}) {
  const templateLiterals = withoutTemplateLiterals ? "" : `\`\`\``;

  return `${templateLiterals}${content
    .trim()
    .split("\n")
    .map(
      (line, index) =>
        `${index === 0 ? "" : generateIndentation(indent)}${line}`
    )
    .join("\n")}${templateLiterals}`;
}

function link(content) {
  return `[${content.text}](${content.url})`;
}

function consoleLog(input, output, withQuotes = true) {
  return `console.log(${input}); ${
    output !== undefined ? comment(output, withQuotes) : ""
  }`.trim();
}

function comment(input, withQuotes) {
  return `// ${toString(input, withQuotes)}`;
}

function variable(varName, varValue) {
  return `const ${varName} = ${varValue};`;
}

function toString(content, withQuotes = false) {
  return `${
    typeof content === "object"
      ? JSON.stringify(content)
      : typeof content === "string" && withQuotes
      ? `"${content}"`
      : content
  }`;
}

// --- STRINGS ---

function replaceAll(str, toReplace, replacement) {
  if (Array.isArray(toReplace)) {
    return toReplace.reduce(
      (result, item) =>
        result.replace(new RegExp(escapeRegExp(item), "g"), replacement),
      str
    );
  }

  return str.replace(new RegExp(escapeRegExp(toReplace), "g"), replacement);
}

function escapeString(input) {
  return replaceAll(replaceAll(input, "\n", "\\n"), '"', "'");
}

// --- MISC ---

function createArray(length, start) {
  return Array.from(Array(length).keys()).map(
    value => value + (start === undefined ? 1 : start)
  );
}

function writeOutput(fileName, content) {
  fs.writeFileSync(path.resolve("./output", `${fileName}`), toString(content));
}

module.exports = {
  bold,
  code,
  comment,
  consoleLog,
  createArray,
  escapeString,
  insertLine,
  link,
  pre,
  replaceAll,
  toString,
  variable,
  writeOutput
};

// --- INTERNALS ---

function escapeRegExp(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
