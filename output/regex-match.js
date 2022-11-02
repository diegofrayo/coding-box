// ### ".match" examples ###

/*
- Return: ["firstMatchFound"] | ["the first complete match and its related capturing groups are returned"] | null
- Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@match#return_value
*/

// {\: (backslash) to escape special characters}
const regex1 = /a\.b/;
console.log("a.b za.bz zabz".match(/a\.b/)); // ["a.b"]
console.log("aa.b b.c".match(/a\.b/)); // ["a.b"]
console.log("ab".match(/a\.b/)); // null
console.log(".".match(/a\.b/)); // null
console.log("43/ .34 drfr".match(/a\.b/)); // null

// {\d: any digit between 0 and 9 | \d = [0-9]}
const regex2 = /\d/;
console.log("a.b za.bz zabz".match(/\d/)); // null
console.log("aa.b b.c".match(/\d/)); // null
console.log("ab".match(/\d/)); // null
console.log(".".match(/\d/)); // null
console.log("43/ .34 drfr".match(/\d/)); // ["4"]

// {\w: (all word characters) a to z, A to Z, _ (underscore) | \w = [0-9a-zA-Z]}
const regex3 = /[0-9a-zA-Z]/;
console.log("5jhde2".match(/[0-9a-zA-Z]/)); // ["5"]
console.log("b--3".match(/[0-9a-zA-Z]/)); // ["b"]
console.log("aB.de- 3".match(/[0-9a-zA-Z]/)); // ["a"]
console.log(" _ _ dd_".match(/[0-9a-zA-Z]/)); // ["d"]
console.log("1A{][]}".match(/[0-9a-zA-Z]/)); // ["1"]
console.log("".match(/[0-9a-zA-Z]/)); // null
console.log("^".match(/[0-9a-zA-Z]/)); // null

// {\s: (whitespaces)}
const regex4 = /\s/;
console.log("a.b za.bz zabz".match(/\s/)); // [" "]
console.log("aa.b b.c".match(/\s/)); // [" "]
console.log("ab".match(/\s/)); // null
console.log(".".match(/\s/)); // null
console.log("43/ .34 drfr".match(/\s/)); // [" "]

// {\n: (line-breaks)}
const regex5 = /\n/;
console.log("fdd\ndd".match(/\n/)); // ["\n"]
console.log("aa .2bb.".match(/\n/)); // null
console.log("".match(/\n/)); // null
console.log(".".match(/\n/)); // null

// {.: any single character}
const regex6 = /./;
console.log("fdddd".match(/./)); // ["f"]
console.log("aa .2bb.".match(/./)); // ["a"]
console.log("".match(/./)); // null
console.log(".c".match(/./)); // ["."]
console.log("2".match(/./)); // ["2"]
console.log(" ".match(/./)); // [" "]

// {.*: any single character (Zero or more of a, input has to start with a, it takes all)}
const regex7 = /\d*/;
console.log("123 343 kfjekjfre 9".match(/\d*/)); // ["123"]
console.log("aa32 .2b".match(/\d*/)); // [""]
console.log("jfe-=-m".match(/\d*/)); // [""]
console.log(".c3".match(/\d*/)); // [""]
console.log("2".match(/\d*/)); // ["2"]
console.log("s 2".match(/\d*/)); // [""]

// {.+: any single character (One or more of a, input does not have to start with a, it takes all)}
const regex8 = /\d+/;
console.log("123 343 kfjekjfre 9".match(/\d+/)); // ["123"]
console.log("aa32 .2b".match(/\d+/)); // ["32"]
console.log("jfe-=-m".match(/\d+/)); // null
console.log(".c3".match(/\d+/)); // ["3"]
console.log("2".match(/\d+/)); // ["2"]
console.log("s 2".match(/\d+/)); // ["2"]

// {.?: any single character (Zero or one of a, input has to start with a, it takes only one match)}
const regex9 = /\d?/;
console.log("123 343 kfjekjfre 9".match(/\d?/)); // ["1"]
console.log("aa32 .2b".match(/\d?/)); // [""]
console.log("jfe-=-m".match(/\d?/)); // [""]
console.log(".c3".match(/\d?/)); // [""]
console.log("2".match(/\d?/)); // ["2"]
console.log("s 2".match(/\d?/)); // [""]

// {.splice}
const regex10 = /\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/;
console.log(".splice(1)".match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/)); // [".splice(1)","splice","1",null,null]
console.log(".splice(1, 1)".match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/)); // [".splice(1, 1)","splice","1, 1",", 1",null]
console.log(".splice(1, 3)".match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/)); // [".splice(1, 3)","splice","1, 3",", 3",null]
console.log(".splice(2, 0, 'b.a')".match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/)); // [".splice(2, 0, \"b.a\")","splice","2, 0, \"b.a\"",", 0",", \"b.a\""]
console.log(".splice(3, 0, 'c.a', 'c.b')".match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/)); // [".splice(3, 0, \"c.a\", \"c.b\")","splice","3, 0, \"c.a\", \"c.b\"",", 0",", \"c.a\", \"c.b\""]
console.log(".splice(-1, 3)".match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/)); // [".splice(-1, 3)","splice","-1, 3",", 3",null]
console.log(".splice(-1, -3)".match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/)); // [".splice(-1, -3)","splice","-1, -3",", -3",null]
console.log(".splice(1, -3)".match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/)); // [".splice(1, -3)","splice","1, -3",", -3",null]
console.log(".splice(-1)".match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/)); // [".splice(-1)","splice","-1",null,null]
console.log(".splice()".match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/)); // null

