// ### ".match [g flag]" examples ###

/*
- Return: ["all matches"] | ["the first complete match but no its related capturing groups"] | null
- Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@match#return_value
*/

// {\: (backslash) to escape special characters}
const regex1 = /a\.b/;
console.log("a.b za.bz zabz".match(/a\.b/g)); // ["a.b","a.b"]
console.log("aa.b b.c".match(/a\.b/g)); // ["a.b"]
console.log("ab".match(/a\.b/g)); // null
console.log(".".match(/a\.b/g)); // null
console.log("43/ .34 drfr".match(/a\.b/g)); // null

// {\d: any digit between 0 and 9 | \d = [0-9]}
const regex2 = /\d/;
console.log("a.b za.bz zabz".match(/\d/g)); // null
console.log("aa.b b.c".match(/\d/g)); // null
console.log("ab".match(/\d/g)); // null
console.log(".".match(/\d/g)); // null
console.log("43/ .34 drfr".match(/\d/g)); // ["4","3","3","4"]

// {\w: (all word characters) a to z, A to Z, _ (underscore) | \w = [0-9a-zA-Z]}
const regex3 = /[0-9a-zA-Z]/;
console.log("5jhde2".match(/[0-9a-zA-Z]/g)); // ["5","j","h","d","e","2"]
console.log("b--3".match(/[0-9a-zA-Z]/g)); // ["b","3"]
console.log("aB.de- 3".match(/[0-9a-zA-Z]/g)); // ["a","B","d","e","3"]
console.log(" _ _ dd_".match(/[0-9a-zA-Z]/g)); // ["d","d"]
console.log("1A{][]}".match(/[0-9a-zA-Z]/g)); // ["1","A"]
console.log("".match(/[0-9a-zA-Z]/g)); // null
console.log("^".match(/[0-9a-zA-Z]/g)); // null

// {\s: (whitespaces)}
const regex4 = /\s/;
console.log("a.b za.bz zabz".match(/\s/g)); // [" "," "]
console.log("aa.b b.c".match(/\s/g)); // [" "]
console.log("ab".match(/\s/g)); // null
console.log(".".match(/\s/g)); // null
console.log("43/ .34 drfr".match(/\s/g)); // [" "," "]

// {\n: (line-breaks)}
const regex5 = /\n/;
console.log("fdd\ndd".match(/\n/g)); // ["\n"]
console.log("aa .2bb.".match(/\n/g)); // null
console.log("".match(/\n/g)); // null
console.log(".".match(/\n/g)); // null

// {.: any single character}
const regex6 = /./;
console.log("fdddd".match(/./g)); // ["f","d","d","d","d"]
console.log("aa .2bb.".match(/./g)); // ["a","a"," ",".","2","b","b","."]
console.log("".match(/./g)); // null
console.log(".c".match(/./g)); // [".","c"]
console.log("2".match(/./g)); // ["2"]
console.log(" ".match(/./g)); // [" "]

// {.*: any single character (Zero or more of a, input has to start with a, it takes all)}
const regex7 = /\d*/;
console.log("123 343 kfjekjfre 9".match(/\d*/g)); // ["123","","343","","","","","","","","","","","","9",""]
console.log("aa32 .2b".match(/\d*/g)); // ["","","32","","","2","",""]
console.log("jfe-=-m".match(/\d*/g)); // ["","","","","","","",""]
console.log(".c3".match(/\d*/g)); // ["","","3",""]
console.log("2".match(/\d*/g)); // ["2",""]
console.log("s 2".match(/\d*/g)); // ["","","2",""]

// {.+: any single character (One or more of a, input does not have to start with a, it takes all)}
const regex8 = /\d+/;
console.log("123 343 kfjekjfre 9".match(/\d+/g)); // ["123","343","9"]
console.log("aa32 .2b".match(/\d+/g)); // ["32","2"]
console.log("jfe-=-m".match(/\d+/g)); // null
console.log(".c3".match(/\d+/g)); // ["3"]
console.log("2".match(/\d+/g)); // ["2"]
console.log("s 2".match(/\d+/g)); // ["2"]

// {.?: any single character (Zero or one of a, input has to start with a, it takes only one match)}
const regex9 = /\d?/;
console.log("123 343 kfjekjfre 9".match(/\d?/g)); // ["1","2","3","","3","4","3","","","","","","","","","","","","9",""]
console.log("aa32 .2b".match(/\d?/g)); // ["","","3","2","","","2","",""]
console.log("jfe-=-m".match(/\d?/g)); // ["","","","","","","",""]
console.log(".c3".match(/\d?/g)); // ["","","3",""]
console.log("2".match(/\d?/g)); // ["2",""]
console.log("s 2".match(/\d?/g)); // ["","","2",""]

// {.splice}
const regex10 = /\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/;
console.log(".splice(1)".match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g)); // [".splice(1)"]
console.log(".splice(1, 1)".match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g)); // [".splice(1, 1)"]
console.log(".splice(1, 3)".match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g)); // [".splice(1, 3)"]
console.log(".splice(2, 0, 'b.a')".match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g)); // [".splice(2, 0, \"b.a\")"]
console.log(".splice(3, 0, 'c.a', 'c.b')".match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g)); // [".splice(3, 0, \"c.a\", \"c.b\")"]
console.log(".splice(-1, 3)".match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g)); // [".splice(-1, 3)"]
console.log(".splice(-1, -3)".match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g)); // [".splice(-1, -3)"]
console.log(".splice(1, -3)".match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g)); // [".splice(1, -3)"]
console.log(".splice(-1)".match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g)); // [".splice(-1)"]
console.log(".splice()".match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g)); // null

