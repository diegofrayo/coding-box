// ### ".exec" examples ###

/*
- Note: The regex passed must have the "g" flag, otherwise, you could get into a infinite loop
- Return: The same as ".matchAll", but each item found is an array with some useful properties like "index"
- Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
*/

// {\: (backslash) to escape special characters}
const regex1 = /a\.b/;
console.log(/a\.b/g.exec("123 a.b 123")); // ✅ | [["a.b"]]
console.log(/a\.b/g.exec("a.b c a.b")); // ✅ | [["a.b"],["a.b"]]
console.log(/a\.b/g.exec("a.b")); // ✅ | [["a.b"]]
console.log(/a\.b/g.exec("aa.bb")); // ✅ | [["a.b"]]
console.log(/a\.b/g.exec("")); // ❌ | []
console.log(/a\.b/g.exec(" a*b ")); // ❌ | []
console.log(/a\.b/g.exec("ab")); // ❌ | []
console.log(/a\.b/g.exec(".")); // ❌ | []

// {\d: any digit between 0 and 9 | \d = [0-9]}
const regex2 = /\d/;
console.log(/\d/g.exec("1a2a3")); // ✅ | [["1"],["2"],["3"]]
console.log(/\d/g.exec("a 3")); // ✅ | [["3"]]
console.log(/\d/g.exec("3")); // ✅ | [["3"]]
console.log(/\d/g.exec("")); // ❌ | []
console.log(/\d/g.exec(" ")); // ❌ | []
console.log(/\d/g.exec("r")); // ❌ | []

// {\w: (All word characters => [a-z], [A-Z], [0-9], [_]}
const regex3 = /^[\w]+$/;
console.log(/^[\w]+$/g.exec("5jhdAe2")); // ✅ | [["5jhdAe2"]]
console.log(/^[\w]+$/g.exec("_")); // ✅ | [["_"]]
console.log(/^[\w]+$/g.exec("2")); // ✅ | [["2"]]
console.log(/^[\w]+$/g.exec("sferwf")); // ✅ | [["sferwf"]]
console.log(/^[\w]+$/g.exec("123_ddDE_Ad")); // ✅ | [["123_ddDE_Ad"]]
console.log(/^[\w]+$/g.exec("123AAd frfr DFD")); // ❌ | []
console.log(/^[\w]+$/g.exec("1A{][]}")); // ❌ | []
console.log(/^[\w]+$/g.exec("b--$$$3")); // ❌ | []
console.log(/^[\w]+$/g.exec("")); // ❌ | []
console.log(/^[\w]+$/g.exec(" ")); // ❌ | []
console.log(/^[\w]+$/g.exec("~!@#$%^&*()+")); // ❌ | []

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
console.log(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g.exec(".splice(1)")); // ✅ | [[".splice(1)","splice","1",null,null]]
console.log(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g.exec(".splice(1, 1)")); // ✅ | [[".splice(1, 1)","splice","1, 1",", 1",null]]
console.log(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g.exec(".splice(1, 3)")); // ✅ | [[".splice(1, 3)","splice","1, 3",", 3",null]]
console.log(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g.exec(".splice(2, 0, 'b.a')")); // ✅ | [[".splice(2, 0, \"b.a\")","splice","2, 0, \"b.a\"",", 0",", \"b.a\""]]
console.log(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g.exec(".splice(3, 0, 'c.a', 'c.b')")); // ✅ | [[".splice(3, 0, \"c.a\", \"c.b\")","splice","3, 0, \"c.a\", \"c.b\"",", 0",", \"c.a\", \"c.b\""]]
console.log(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g.exec(".splice(-1, 3)")); // ✅ | [[".splice(-1, 3)","splice","-1, 3",", 3",null]]
console.log(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g.exec(".splice(-1, -3)")); // ✅ | [[".splice(-1, -3)","splice","-1, -3",", -3",null]]
console.log(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g.exec(".splice(1, -3)")); // ✅ | [[".splice(1, -3)","splice","1, -3",", -3",null]]
console.log(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g.exec(".splice(-1)")); // ✅ | [[".splice(-1)","splice","-1",null,null]]
console.log(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g.exec(".splice()")); // ❌ | []

// {{exact}: [Example => Colombian phone number]}
const regex11 = /^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/;
console.log(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/g.exec("3113728898")); // ✅ | [["3113728898",null]]
console.log(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/g.exec("311-372-8898")); // ✅ | [["311-372-8898",null]]
console.log(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/g.exec("311 372 8898")); // ✅ | [["311 372 8898",null]]
console.log(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/g.exec("+57 3113728898")); // ✅ | [["+57 3113728898","+57 "]]
console.log(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/g.exec("+57 311-372-8898")); // ✅ | [["+57 311-372-8898","+57 "]]
console.log(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/g.exec("+57 311 372 8898")); // ✅ | [["+57 311 372 8898","+57 "]]
console.log(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/g.exec("311372 8898")); // ❌ | [["311372 8898",null]]
console.log(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/g.exec("311372-8898")); // ❌ | [["311372-8898",null]]
console.log(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/g.exec("311372889")); // ❌ | []
console.log(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/g.exec("4113728898")); // ❌ | []
console.log(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/g.exec("3113728898s")); // ❌ | []
console.log(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/g.exec("311-372-8898-")); // ❌ | []
console.log(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/g.exec("+57311-372-8898")); // ❌ | []

// {{min,max}: [Example => Zip code with numbers and its length between 3 and 6]}
const regex12 = /^\d{3,6}$/;
console.log(/^\d{3,6}$/g.exec("123456")); // ✅ | [["123456"]]
console.log(/^\d{3,6}$/g.exec("12345")); // ✅ | [["12345"]]
console.log(/^\d{3,6}$/g.exec("1234")); // ✅ | [["1234"]]
console.log(/^\d{3,6}$/g.exec("123")); // ✅ | [["123"]]
console.log(/^\d{3,6}$/g.exec("1234567")); // ❌ | []
console.log(/^\d{3,6}$/g.exec("12345c")); // ❌ | []
console.log(/^\d{3,6}$/g.exec("12")); // ❌ | []

// {{min,}: Length equals or greater than min}
const regex13 = /^\d{3,}$/;
console.log(/^\d{3,}$/g.exec("12345")); // ✅ | [["12345"]]
console.log(/^\d{3,}$/g.exec("1234")); // ✅ | [["1234"]]
console.log(/^\d{3,}$/g.exec("123")); // ✅ | [["123"]]
console.log(/^\d{3,}$/g.exec("123c")); // ❌ | []
console.log(/^\d{3,}$/g.exec("12")); // ❌ | []

// {{min,max}: [Example => Password with digits, lowercase and uppercase letters and some special characters]}
const regex14 = /([A-Z]+[a-z]+\d+)/;
console.log(/([A-Z]+[a-z]+\d+)/g.exec("Diego123")); // ✅ | [["Diego123","Diego123"]]
console.log(/([A-Z]+[a-z]+\d+)/g.exec("123diegoRayo")); // ❌ | []

