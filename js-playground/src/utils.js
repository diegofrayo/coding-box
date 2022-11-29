const fs = require("fs");
const path = require("path");

function insertLine(
  content,
  { indent = 0, breakLines = 1, deleteIndentation = 0 } = {}
) {
  const line = `${generateIndentation(indent)}${content}${createArray(
    breakLines
  )
    .map((i) => "\n")
    .join("")}`;

  if (deleteIndentation === 0) {
    return line;
  }

  return `${replaceAll(
    line,
    createArray(deleteIndentation)
      .map((i) => "  ")
      .join(""),
    ""
  )}`;
}

function generateIndentation(indent) {
  return createArray(indent * 2)
    .map((i) => " ")
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

function toString(content) {
  return `${typeof content === "object" ? JSON.stringify(content) : content}`;
}

function createArray(length, start) {
  return Array.from(Array(length).keys()).map(
    (value) => value + (start === undefined ? 1 : start)
  );
}

function consoleLog(input, output) {
  return `console.log(${input}); ${
    output !== undefined ? comment(output) : ""
  }`.trim();
}

function comment(input) {
  return `// ${toString(input)}`;
}

function variable(varName, varValue) {
  return `const ${varName} = ${varValue};`;
}

function writeOutput(fileName, content) {
  fs.writeFileSync(path.resolve("./output", `${fileName}`), toString(content));
}

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
  writeOutput,
};

// --- Utils ---

function escapeRegExp(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
