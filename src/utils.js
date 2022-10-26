const fs = require("fs");
const path = require("path");

function insertLine(content, { indent = 0, breakLines = 1 } = {}) {
  return `${generateIndent(indent)}${content}${createArray(breakLines)
    .map((i) => "\n")
    .join("")}`;
}

function generateIndent(indent) {
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

function pre(content, indent = 0) {
  return `\`\`\`${trim(toString(content))
    .split("\n")
    // .filter((line, index) => (index > 0 ? line.trim().length > 0 : true))
    .map(
      (line) =>
        `${line.trim().length === 0 ? "" : generateIndent(indent)}${line}`
    )
    .join("\n")}\`\`\``;
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

function trim(input) {
  return input;
}

function writeOutput(fileName, content) {
  fs.writeFileSync(
    path.resolve("./output", `${fileName}.md`),
    toString(content)
  );
}

module.exports = {
  bold,
  code,
  createArray,
  insertLine,
  link,
  pre,
  toString,
  trim,
  writeOutput,
};
