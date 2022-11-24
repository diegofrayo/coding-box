// ### ".match" examples ###

/*
- Return: ["firstMatchFound"] | ["the first complete match and its related capturing groups are returned"] | null
- Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@match#return_value
*/

// {\: (backslash) to escape special characters}
const regex1 = /a\.b/;
console.log("123 a.b 123".match(/a\.b/)); // ✅ | ["a.b"]
console.log("a.b c a.b".match(/a\.b/)); // ✅ | ["a.b"]
console.log("a.b".match(/a\.b/)); // ✅ | ["a.b"]
console.log("aa.bb".match(/a\.b/)); // ✅ | ["a.b"]
console.log("".match(/a\.b/)); // ✅ | null
console.log(" a*b ".match(/a\.b/)); // ✅ | null
console.log("ab".match(/a\.b/)); // ✅ | null
console.log(".".match(/a\.b/)); // ✅ | null

// {\d: any digit between 0 and 9 | \d = [0-9]}
const regex2 = /\d/;
console.log("1a2a3".match(/\d/)); // ✅ | ["1"]
console.log("a 3".match(/\d/)); // ✅ | ["3"]
console.log("3".match(/\d/)); // ✅ | ["3"]
console.log("".match(/\d/)); // ✅ | null
console.log(" ".match(/\d/)); // ✅ | null
console.log("r".match(/\d/)); // ✅ | null

// {\w: (All word characters => [a-z], [A-Z], [0-9], [_]}
const regex3 = /^[\w]+$/;
console.log("5jhdAe2".match(/^[\w]+$/)); // ✅ | ["5jhdAe2"]
console.log("_".match(/^[\w]+$/)); // ✅ | ["_"]
console.log("2".match(/^[\w]+$/)); // ✅ | ["2"]
console.log("sferwf".match(/^[\w]+$/)); // ✅ | ["sferwf"]
console.log("123_ddDE_Ad".match(/^[\w]+$/)); // ✅ | ["123_ddDE_Ad"]
console.log("123AAd frfr DFD".match(/^[\w]+$/)); // ✅ | null
console.log("1A{][]}".match(/^[\w]+$/)); // ✅ | null
console.log("b--$$$3".match(/^[\w]+$/)); // ✅ | null
console.log("".match(/^[\w]+$/)); // ✅ | null
console.log(" ".match(/^[\w]+$/)); // ✅ | null
console.log("~!@#$%^&*()+".match(/^[\w]+$/)); // ✅ | null

// {\s: (whitespaces)}
const regex4 = /\s/;

// {\n: (line-breaks)}
const regex5 = /\n/;

// {.: any single character}
const regex6 = /./;

// {.*: any single character (Zero or more of a, input has to start with a, it takes all)}
const regex7 = /\d*/;

// {.+: any single character (One or more of a, input does not have to start with a, it takes all)}
const regex8 = /\d+/;

// {.?: any single character (Zero or one of a, input has to start with a, it takes only one match [smallest possible])}
const regex9 = /\d?/;

// {.splice}
const regex10 = /\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/;
console.log(".splice(1)".match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/)); // ✅ | [".splice(1)","splice","1",null,null]
console.log(".splice(1, 1)".match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/)); // ✅ | [".splice(1, 1)","splice","1, 1",", 1",null]
console.log(".splice(1, 3)".match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/)); // ✅ | [".splice(1, 3)","splice","1, 3",", 3",null]
console.log(".splice(2, 0, 'b.a')".match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/)); // ✅ | [".splice(2, 0, \"b.a\")","splice","2, 0, \"b.a\"",", 0",", \"b.a\""]
console.log(".splice(3, 0, 'c.a', 'c.b')".match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/)); // ✅ | [".splice(3, 0, \"c.a\", \"c.b\")","splice","3, 0, \"c.a\", \"c.b\"",", 0",", \"c.a\", \"c.b\""]
console.log(".splice(-1, 3)".match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/)); // ✅ | [".splice(-1, 3)","splice","-1, 3",", 3",null]
console.log(".splice(-1, -3)".match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/)); // ✅ | [".splice(-1, -3)","splice","-1, -3",", -3",null]
console.log(".splice(1, -3)".match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/)); // ✅ | [".splice(1, -3)","splice","1, -3",", -3",null]
console.log(".splice(-1)".match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/)); // ✅ | [".splice(-1)","splice","-1",null,null]
console.log(".splice()".match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/)); // ❌ | null

// {{exact}: [Example => Colombian phone number]}
const regex11 = /^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/;
console.log("3113728898".match(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/)); // ✅ | ["3113728898",null]
console.log("311-372-8898".match(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/)); // ✅ | ["311-372-8898",null]
console.log("311 372 8898".match(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/)); // ✅ | ["311 372 8898",null]
console.log("+57 3113728898".match(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/)); // ✅ | ["+57 3113728898","+57 "]
console.log("+57 311-372-8898".match(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/)); // ✅ | ["+57 311-372-8898","+57 "]
console.log("+57 311 372 8898".match(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/)); // ✅ | ["+57 311 372 8898","+57 "]
console.log("311372 8898".match(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/)); // ❌ | ["311372 8898",null]
console.log("311372-8898".match(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/)); // ❌ | ["311372-8898",null]
console.log("311372889".match(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/)); // ✅ | null
console.log("4113728898".match(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/)); // ✅ | null
console.log("3113728898s".match(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/)); // ✅ | null
console.log("311-372-8898-".match(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/)); // ✅ | null
console.log("+57311-372-8898".match(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/)); // ✅ | null

// {{min,max}: [Example => Zip code with numbers and its length between 3 and 6]}
const regex12 = /^\d{3,6}$/;
console.log("123456".match(/^\d{3,6}$/)); // ✅ | ["123456"]
console.log("12345".match(/^\d{3,6}$/)); // ✅ | ["12345"]
console.log("1234".match(/^\d{3,6}$/)); // ✅ | ["1234"]
console.log("123".match(/^\d{3,6}$/)); // ✅ | ["123"]
console.log("1234567".match(/^\d{3,6}$/)); // ✅ | null
console.log("12345c".match(/^\d{3,6}$/)); // ✅ | null
console.log("12".match(/^\d{3,6}$/)); // ✅ | null

// {{min,}: Length equals or greater than min}
const regex13 = /^\d{3,}$/;
console.log("12345".match(/^\d{3,}$/)); // ✅ | ["12345"]
console.log("1234".match(/^\d{3,}$/)); // ✅ | ["1234"]
console.log("123".match(/^\d{3,}$/)); // ✅ | ["123"]
console.log("123c".match(/^\d{3,}$/)); // ✅ | null
console.log("12".match(/^\d{3,}$/)); // ✅ | null

// {{min,max}: [Example => Password with digits, lowercase and uppercase letters and some special characters]}
const regex14 = /([A-Z]+[a-z]+\d+)/;
console.log("Diego123".match(/([A-Z]+[a-z]+\d+)/)); // ✅ | ["Diego123","Diego123"]
console.log("123diegoRayo".match(/([A-Z]+[a-z]+\d+)/)); // ✅ | null

