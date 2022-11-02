// ### ".test" examples ###

/*
- Return: boolean
- Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
*/

// {\: (backslash) to escape special characters}
const regex1 = /a\.b/;
console.log(/a\.b/.test("a.b za.bz zabz")); // true 
console.log(/a\.b/.test("aa.b b.c")); // true 
console.log(/a\.b/.test("ab")); // false 
console.log(/a\.b/.test(".")); // false 
console.log(/a\.b/.test("43/ .34 drfr")); // false 

// {\d: any digit between 0 and 9 | \d = [0-9]}
const regex2 = /\d/;
console.log(/\d/.test("a.b za.bz zabz")); // false 
console.log(/\d/.test("aa.b b.c")); // false 
console.log(/\d/.test("ab")); // false 
console.log(/\d/.test(".")); // false 
console.log(/\d/.test("43/ .34 drfr")); // true 

// {\w: (all word characters) a to z, A to Z, _ (underscore) | \w = [0-9a-zA-Z]}
const regex3 = /[0-9a-zA-Z]/;
console.log(/[0-9a-zA-Z]/.test("5jhde2")); // true 
console.log(/[0-9a-zA-Z]/.test("b--3")); // true 
console.log(/[0-9a-zA-Z]/.test("aB.de- 3")); // true 
console.log(/[0-9a-zA-Z]/.test(" _ _ dd_")); // true 
console.log(/[0-9a-zA-Z]/.test("1A{][]}")); // true 
console.log(/[0-9a-zA-Z]/.test("")); // false 
console.log(/[0-9a-zA-Z]/.test("^")); // false 

// {\s: (whitespaces)}
const regex4 = /\s/;
console.log(/\s/.test("a.b za.bz zabz")); // true 
console.log(/\s/.test("aa.b b.c")); // true 
console.log(/\s/.test("ab")); // false 
console.log(/\s/.test(".")); // false 
console.log(/\s/.test("43/ .34 drfr")); // true 

// {\n: (line-breaks)}
const regex5 = /\n/;
console.log(/\n/.test("fdd\ndd")); // true 
console.log(/\n/.test("aa .2bb.")); // false 
console.log(/\n/.test("")); // false 
console.log(/\n/.test(".")); // false 

// {.: any single character}
const regex6 = /./;
console.log(/./.test("fdddd")); // true 
console.log(/./.test("aa .2bb.")); // true 
console.log(/./.test("")); // false 
console.log(/./.test(".c")); // true 
console.log(/./.test("2")); // true 
console.log(/./.test(" ")); // true 

// {.*: any single character (Zero or more of a, input has to start with a, it takes all)}
const regex7 = /\d*/;
console.log(/\d*/.test("123 343 kfjekjfre 9")); // true 
console.log(/\d*/.test("aa32 .2b")); // true 
console.log(/\d*/.test("jfe-=-m")); // true 
console.log(/\d*/.test(".c3")); // true 
console.log(/\d*/.test("2")); // true 
console.log(/\d*/.test("s 2")); // true 

// {.+: any single character (One or more of a, input does not have to start with a, it takes all)}
const regex8 = /\d+/;
console.log(/\d+/.test("123 343 kfjekjfre 9")); // true 
console.log(/\d+/.test("aa32 .2b")); // true 
console.log(/\d+/.test("jfe-=-m")); // false 
console.log(/\d+/.test(".c3")); // true 
console.log(/\d+/.test("2")); // true 
console.log(/\d+/.test("s 2")); // true 

// {.?: any single character (Zero or one of a, input has to start with a, it takes only one match)}
const regex9 = /\d?/;
console.log(/\d?/.test("123 343 kfjekjfre 9")); // true 
console.log(/\d?/.test("aa32 .2b")); // true 
console.log(/\d?/.test("jfe-=-m")); // true 
console.log(/\d?/.test(".c3")); // true 
console.log(/\d?/.test("2")); // true 
console.log(/\d?/.test("s 2")); // true 

// {.splice}
const regex10 = /\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/;
console.log(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/.test(".splice(1)")); // true 
console.log(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/.test(".splice(1, 1)")); // true 
console.log(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/.test(".splice(1, 3)")); // true 
console.log(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/.test(".splice(2, 0, 'b.a')")); // true 
console.log(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/.test(".splice(3, 0, 'c.a', 'c.b')")); // true 
console.log(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/.test(".splice(-1, 3)")); // true 
console.log(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/.test(".splice(-1, -3)")); // true 
console.log(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/.test(".splice(1, -3)")); // true 
console.log(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/.test(".splice(-1)")); // true 
console.log(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/.test(".splice()")); // false 

