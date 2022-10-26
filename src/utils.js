function insertLine(content, options = { indent: 0 }) {
  return `${createArray(options.indent * 2)
    .map((i) => "")
    .join(" ")}${content}\n`;
}

function bold(content) {
  return `**${content}**`;
}

function code(content) {
  return `\`${printObject(content)}\``;
}

function printObject(content) {
  return `${typeof content === "object" ? JSON.stringify(content) : content}`;
}

function createArray(length, start) {
  return Array.from(Array(length).keys()).map(
    (value) => value + (start === undefined ? 1 : start)
  );
}

module.exports = {
  bold,
  code,
  createArray,
  insertLine,
  printObject,
};
