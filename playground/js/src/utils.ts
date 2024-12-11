import fs from "fs";
import path from "path";

// --- OUTPUT FORMATTING ---

export function insertLine(
	content: string,
	{ indent = 0, breakLines = 1, deleteIndentation = 0, topBreakLines = 0 } = {},
) {
	const line = `${generateBreakLines(topBreakLines)}${generateIndentation(
		indent,
	)}${content}${generateBreakLines(breakLines)}`;

	if (deleteIndentation === 0) {
		return line;
	}

	return `${replaceAll(
		line,
		createArray(deleteIndentation)
			.map(() => "  ")
			.join(""),
		"",
	)}`;
}

export function generateBreakLines(breakLines: number) {
	return createArray(breakLines)
		.map(() => "\n")
		.join("");
}

export function generateIndentation(indent: number) {
	return createArray(indent * 2)
		.map(() => " ")
		.join("");
}

export function bold(content: string) {
	return `**${content}**`;
}

export function code(content: string) {
	return `\`${toString(content)}\``;
}

export function pre(content: string, { indent = 0, withoutTemplateLiterals = false } = {}) {
	const templateLiterals = withoutTemplateLiterals ? "" : `\`\`\``;

	return `${templateLiterals}${content
		.trim()
		.split("\n")
		.map((line, index) => `${index === 0 ? "" : generateIndentation(indent)}${line}`)
		.join("\n")}${templateLiterals}`;
}

export function link(content: { text: string; url: string }) {
	return `[${content.text}](${content.url})`;
}

export function consoleLog(input: string, output: string, withQuotes = true) {
	return `console.log(${input}); ${output !== undefined ? comment(output, withQuotes) : ""}`.trim();
}

export function comment(input: string, withQuotes: boolean) {
	return `// ${toString(input, withQuotes)}`;
}

export function variable(varName: string, varValue: string) {
	return `const ${varName} = ${varValue};`;
}

export function toString(content: string | object, withQuotes = false) {
	return `${
		typeof content === "object"
			? JSON.stringify(content)
			: typeof content === "string" && withQuotes
			? `"${content}"`
			: content
	}`;
}

// --- STRINGS ---

export function replaceAll(str: string, toReplace: string, replacement: string) {
	if (Array.isArray(toReplace)) {
		return toReplace.reduce(
			(result, item) => result.replace(new RegExp(escapeRegExp(item), "g"), replacement),
			str,
		);
	}

	return str.replace(new RegExp(escapeRegExp(toReplace), "g"), replacement);
}

export function escapeString(input: string) {
	return replaceAll(replaceAll(input, "\n", "\\n"), '"', "'");
}

// --- MISC ---

export function createArray(length: number, start?: number) {
	return Array.from(Array(length).keys()).map((value) => value + (start === undefined ? 1 : start));
}

export function writeOutput(fileName: string, content: string) {
	fs.writeFileSync(path.resolve("./output", `${fileName}`), toString(content));
}

// --- HELPERS ---

function escapeRegExp(text: string) {
	return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
