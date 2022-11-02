// ### ".exec" examples ###

/*
- Note: The regex passed must have the "g" flag, otherwise, you could get into a infinite loop
- Return: The same as ".matchAll", but each item found is an array with some useful properties like "index"
- Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
*/

// {\: (backslash) to escape special characters}
const regex1 = /a\.b/;
console.log(/a\.b/g.exec("a.b za.bz zabz")); // [["a.b"],["a.b"]]
console.log(/a\.b/g.exec("aa.b b.c")); // [["a.b"]]
console.log(/a\.b/g.exec("ab")); // []
console.log(/a\.b/g.exec(".")); // []
console.log(/a\.b/g.exec("43/ .34 drfr")); // []

// {\d: any digit between 0 and 9 | \d = [0-9]}
const regex2 = /\d/;
console.log(/\d/g.exec("a.b za.bz zabz")); // []
console.log(/\d/g.exec("aa.b b.c")); // []
console.log(/\d/g.exec("ab")); // []
console.log(/\d/g.exec(".")); // []
console.log(/\d/g.exec("43/ .34 drfr")); // [["4"],["3"],["3"],["4"]]

// {\w: (all word characters) a to z, A to Z, _ (underscore) | \w = [0-9a-zA-Z]}
const regex3 = /[0-9a-zA-Z]/;
console.log(/[0-9a-zA-Z]/g.exec("5jhde2")); // [["5"],["j"],["h"],["d"],["e"],["2"]]
console.log(/[0-9a-zA-Z]/g.exec("b--3")); // [["b"],["3"]]
console.log(/[0-9a-zA-Z]/g.exec("aB.de- 3")); // [["a"],["B"],["d"],["e"],["3"]]
console.log(/[0-9a-zA-Z]/g.exec(" _ _ dd_")); // [["d"],["d"]]
console.log(/[0-9a-zA-Z]/g.exec("1A{][]}")); // [["1"],["A"]]
console.log(/[0-9a-zA-Z]/g.exec("")); // []
console.log(/[0-9a-zA-Z]/g.exec("^")); // []

// {\s: (whitespaces)}
const regex4 = /\s/;
console.log(/\s/g.exec("a.b za.bz zabz")); // [[" "],[" "]]
console.log(/\s/g.exec("aa.b b.c")); // [[" "]]
console.log(/\s/g.exec("ab")); // []
console.log(/\s/g.exec(".")); // []
console.log(/\s/g.exec("43/ .34 drfr")); // [[" "],[" "]]

// {\n: (line-breaks)}
const regex5 = /\n/;
console.log(/\n/g.exec("fdd\ndd")); // [["\n"]]
console.log(/\n/g.exec("aa .2bb.")); // []
console.log(/\n/g.exec("")); // []
console.log(/\n/g.exec(".")); // []

// {.: any single character}
const regex6 = /./;
console.log(/./g.exec("fdddd")); // [["f"],["d"],["d"],["d"],["d"]]
console.log(/./g.exec("aa .2bb.")); // [["a"],["a"],[" "],["."],["2"],["b"],["b"],["."]]
console.log(/./g.exec("")); // []
console.log(/./g.exec(".c")); // [["."],["c"]]
console.log(/./g.exec("2")); // [["2"]]
console.log(/./g.exec(" ")); // [[" "]]

// {.*: any single character (Zero or more of a, input has to start with a, it takes all)}
const regex7 = /\d*/;
console.log(/\d*/g.exec("123 343 kfjekjfre 9")); // [["123"]]
console.log(/\d*/g.exec("aa32 .2b")); // []
console.log(/\d*/g.exec("jfe-=-m")); // []
console.log(/\d*/g.exec(".c3")); // []
console.log(/\d*/g.exec("2")); // [["2"]]
console.log(/\d*/g.exec("s 2")); // []

// {.+: any single character (One or more of a, input does not have to start with a, it takes all)}
const regex8 = /\d+/;
console.log(/\d+/g.exec("123 343 kfjekjfre 9")); // [["123"],["343"],["9"]]
console.log(/\d+/g.exec("aa32 .2b")); // [["32"],["2"]]
console.log(/\d+/g.exec("jfe-=-m")); // []
console.log(/\d+/g.exec(".c3")); // [["3"]]
console.log(/\d+/g.exec("2")); // [["2"]]
console.log(/\d+/g.exec("s 2")); // [["2"]]

// {.?: any single character (Zero or one of a, input has to start with a, it takes only one match)}
const regex9 = /\d?/;
console.log(/\d?/g.exec("123 343 kfjekjfre 9")); // [["1"],["2"],["3"]]
console.log(/\d?/g.exec("aa32 .2b")); // []
console.log(/\d?/g.exec("jfe-=-m")); // []
console.log(/\d?/g.exec(".c3")); // []
console.log(/\d?/g.exec("2")); // [["2"]]
console.log(/\d?/g.exec("s 2")); // []

// {.splice}
const regex10 = /\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/;
console.log(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g.exec(".splice(1)")); // [[".splice(1)","splice","1",null,null]]
console.log(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g.exec(".splice(1, 1)")); // [[".splice(1, 1)","splice","1, 1",", 1",null]]
console.log(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g.exec(".splice(1, 3)")); // [[".splice(1, 3)","splice","1, 3",", 3",null]]
console.log(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g.exec(".splice(2, 0, 'b.a')")); // [[".splice(2, 0, \"b.a\")","splice","2, 0, \"b.a\"",", 0",", \"b.a\""]]
console.log(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g.exec(".splice(3, 0, 'c.a', 'c.b')")); // [[".splice(3, 0, \"c.a\", \"c.b\")","splice","3, 0, \"c.a\", \"c.b\"",", 0",", \"c.a\", \"c.b\""]]
console.log(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g.exec(".splice(-1, 3)")); // [[".splice(-1, 3)","splice","-1, 3",", 3",null]]
console.log(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g.exec(".splice(-1, -3)")); // [[".splice(-1, -3)","splice","-1, -3",", -3",null]]
console.log(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g.exec(".splice(1, -3)")); // [[".splice(1, -3)","splice","1, -3",", -3",null]]
console.log(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g.exec(".splice(-1)")); // [[".splice(-1)","splice","-1",null,null]]
console.log(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g.exec(".splice()")); // []

