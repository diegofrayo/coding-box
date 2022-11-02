// ### ".matchAll" examples ###

/*
- Note: The regex passed must have the "g" flag, otherwise, an error is thrown
- Return: RegExpStringIterator => ["all matches"] | ["the first complete match and its related capturing groups are returned"] | []
- Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll
*/

// {\: (backslash) to escape special characters}
const regex1 = /a\.b/;
console.log("a.b za.bz zabz".matchAll(/a\.b/g)); // [["a.b"],["a.b"]]
console.log("aa.b b.c".matchAll(/a\.b/g)); // [["a.b"]]
console.log("ab".matchAll(/a\.b/g)); // []
console.log(".".matchAll(/a\.b/g)); // []
console.log("43/ .34 drfr".matchAll(/a\.b/g)); // []

// {\d: any digit between 0 and 9 | \d = [0-9]}
const regex2 = /\d/;
console.log("a.b za.bz zabz".matchAll(/\d/g)); // []
console.log("aa.b b.c".matchAll(/\d/g)); // []
console.log("ab".matchAll(/\d/g)); // []
console.log(".".matchAll(/\d/g)); // []
console.log("43/ .34 drfr".matchAll(/\d/g)); // [["4"],["3"],["3"],["4"]]

// {\w: (all word characters) a to z, A to Z, _ (underscore) | \w = [0-9a-zA-Z]}
const regex3 = /[0-9a-zA-Z]/;
console.log("5jhde2".matchAll(/[0-9a-zA-Z]/g)); // [["5"],["j"],["h"],["d"],["e"],["2"]]
console.log("b--3".matchAll(/[0-9a-zA-Z]/g)); // [["b"],["3"]]
console.log("aB.de- 3".matchAll(/[0-9a-zA-Z]/g)); // [["a"],["B"],["d"],["e"],["3"]]
console.log(" _ _ dd_".matchAll(/[0-9a-zA-Z]/g)); // [["d"],["d"]]
console.log("1A{][]}".matchAll(/[0-9a-zA-Z]/g)); // [["1"],["A"]]
console.log("".matchAll(/[0-9a-zA-Z]/g)); // []
console.log("^".matchAll(/[0-9a-zA-Z]/g)); // []

// {\s: (whitespaces)}
const regex4 = /\s/;
console.log("a.b za.bz zabz".matchAll(/\s/g)); // [[" "],[" "]]
console.log("aa.b b.c".matchAll(/\s/g)); // [[" "]]
console.log("ab".matchAll(/\s/g)); // []
console.log(".".matchAll(/\s/g)); // []
console.log("43/ .34 drfr".matchAll(/\s/g)); // [[" "],[" "]]

// {\n: (line-breaks)}
const regex5 = /\n/;
console.log("fdd\ndd".matchAll(/\n/g)); // [["\n"]]
console.log("aa .2bb.".matchAll(/\n/g)); // []
console.log("".matchAll(/\n/g)); // []
console.log(".".matchAll(/\n/g)); // []

// {.: any single character}
const regex6 = /./;
console.log("fdddd".matchAll(/./g)); // [["f"],["d"],["d"],["d"],["d"]]
console.log("aa .2bb.".matchAll(/./g)); // [["a"],["a"],[" "],["."],["2"],["b"],["b"],["."]]
console.log("".matchAll(/./g)); // []
console.log(".c".matchAll(/./g)); // [["."],["c"]]
console.log("2".matchAll(/./g)); // [["2"]]
console.log(" ".matchAll(/./g)); // [[" "]]

// {.*: any single character (Zero or more of a, input has to start with a, it takes all)}
const regex7 = /\d*/;
console.log("123 343 kfjekjfre 9".matchAll(/\d*/g)); // [["123"],[""],["343"],[""],[""],[""],[""],[""],[""],[""],[""],[""],[""],[""],["9"],[""]]
console.log("aa32 .2b".matchAll(/\d*/g)); // [[""],[""],["32"],[""],[""],["2"],[""],[""]]
console.log("jfe-=-m".matchAll(/\d*/g)); // [[""],[""],[""],[""],[""],[""],[""],[""]]
console.log(".c3".matchAll(/\d*/g)); // [[""],[""],["3"],[""]]
console.log("2".matchAll(/\d*/g)); // [["2"],[""]]
console.log("s 2".matchAll(/\d*/g)); // [[""],[""],["2"],[""]]

// {.+: any single character (One or more of a, input does not have to start with a, it takes all)}
const regex8 = /\d+/;
console.log("123 343 kfjekjfre 9".matchAll(/\d+/g)); // [["123"],["343"],["9"]]
console.log("aa32 .2b".matchAll(/\d+/g)); // [["32"],["2"]]
console.log("jfe-=-m".matchAll(/\d+/g)); // []
console.log(".c3".matchAll(/\d+/g)); // [["3"]]
console.log("2".matchAll(/\d+/g)); // [["2"]]
console.log("s 2".matchAll(/\d+/g)); // [["2"]]

// {.?: any single character (Zero or one of a, input has to start with a, it takes only one match)}
const regex9 = /\d?/;
console.log("123 343 kfjekjfre 9".matchAll(/\d?/g)); // [["1"],["2"],["3"],[""],["3"],["4"],["3"],[""],[""],[""],[""],[""],[""],[""],[""],[""],[""],[""],["9"],[""]]
console.log("aa32 .2b".matchAll(/\d?/g)); // [[""],[""],["3"],["2"],[""],[""],["2"],[""],[""]]
console.log("jfe-=-m".matchAll(/\d?/g)); // [[""],[""],[""],[""],[""],[""],[""],[""]]
console.log(".c3".matchAll(/\d?/g)); // [[""],[""],["3"],[""]]
console.log("2".matchAll(/\d?/g)); // [["2"],[""]]
console.log("s 2".matchAll(/\d?/g)); // [[""],[""],["2"],[""]]

// {.splice}
const regex10 = /\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/;
console.log(".splice(1)".matchAll(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g)); // [[".splice(1)","splice","1",null,null]]
console.log(".splice(1, 1)".matchAll(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g)); // [[".splice(1, 1)","splice","1, 1",", 1",null]]
console.log(".splice(1, 3)".matchAll(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g)); // [[".splice(1, 3)","splice","1, 3",", 3",null]]
console.log(".splice(2, 0, 'b.a')".matchAll(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g)); // [[".splice(2, 0, \"b.a\")","splice","2, 0, \"b.a\"",", 0",", \"b.a\""]]
console.log(".splice(3, 0, 'c.a', 'c.b')".matchAll(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g)); // [[".splice(3, 0, \"c.a\", \"c.b\")","splice","3, 0, \"c.a\", \"c.b\"",", 0",", \"c.a\", \"c.b\""]]
console.log(".splice(-1, 3)".matchAll(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g)); // [[".splice(-1, 3)","splice","-1, 3",", 3",null]]
console.log(".splice(-1, -3)".matchAll(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g)); // [[".splice(-1, -3)","splice","-1, -3",", -3",null]]
console.log(".splice(1, -3)".matchAll(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g)); // [[".splice(1, -3)","splice","1, -3",", -3",null]]
console.log(".splice(-1)".matchAll(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g)); // [[".splice(-1)","splice","-1",null,null]]
console.log(".splice()".matchAll(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g)); // []

