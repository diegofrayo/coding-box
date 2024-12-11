// ### ".matchAll" examples ###

/*
- Note: The regex passed must have the "g" flag, otherwise, an error is thrown
- Return: RegExpStringIterator => ["all matches"] | ["the first complete match and its related capturing groups are returned"] | []
- Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll
*/

// {\: (backslash) to escape special characters}
const regex1 = /a\.b/;
console.log("123 a.b 123".matchAll(/a\.b/g)); // ✅ | [["a.b"]]
console.log("a.b c a.b".matchAll(/a\.b/g)); // ✅ | [["a.b"],["a.b"]]
console.log("a.b".matchAll(/a\.b/g)); // ✅ | [["a.b"]]
console.log("aa.bb".matchAll(/a\.b/g)); // ✅ | [["a.b"]]
console.log("".matchAll(/a\.b/g)); // ❌ | []
console.log(" a*b ".matchAll(/a\.b/g)); // ❌ | []
console.log("ab".matchAll(/a\.b/g)); // ❌ | []
console.log(".".matchAll(/a\.b/g)); // ❌ | []

// {\d: any digit between 0 and 9 | \d = [0-9]}
const regex2 = /\d/;
console.log("1a2a3".matchAll(/\d/g)); // ✅ | [["1"],["2"],["3"]]
console.log("a 3".matchAll(/\d/g)); // ✅ | [["3"]]
console.log("3".matchAll(/\d/g)); // ✅ | [["3"]]
console.log("".matchAll(/\d/g)); // ❌ | []
console.log(" ".matchAll(/\d/g)); // ❌ | []
console.log("r".matchAll(/\d/g)); // ❌ | []

// {\w: (All word characters => [a-z], [A-Z], [0-9], [_]}
const regex3 = /^[\w]+$/;
console.log("5jhdAe2".matchAll(/^[\w]+$/g)); // ✅ | [["5jhdAe2"]]
console.log("_".matchAll(/^[\w]+$/g)); // ✅ | [["_"]]
console.log("2".matchAll(/^[\w]+$/g)); // ✅ | [["2"]]
console.log("sferwf".matchAll(/^[\w]+$/g)); // ✅ | [["sferwf"]]
console.log("123_ddDE_Ad".matchAll(/^[\w]+$/g)); // ✅ | [["123_ddDE_Ad"]]
console.log("123AAd frfr DFD".matchAll(/^[\w]+$/g)); // ❌ | []
console.log("1A{][]}".matchAll(/^[\w]+$/g)); // ❌ | []
console.log("b--$$$3".matchAll(/^[\w]+$/g)); // ❌ | []
console.log("".matchAll(/^[\w]+$/g)); // ❌ | []
console.log(" ".matchAll(/^[\w]+$/g)); // ❌ | []
console.log("~!@#$%^&*()+".matchAll(/^[\w]+$/g)); // ❌ | []

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
console.log(
  ".splice(1)".matchAll(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g)
); // ✅ | [[".splice(1)","splice","1",null,null]]
console.log(
  ".splice(1, 1)".matchAll(
    /\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g
  )
); // ✅ | [[".splice(1, 1)","splice","1, 1",", 1",null]]
console.log(
  ".splice(1, 3)".matchAll(
    /\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g
  )
); // ✅ | [[".splice(1, 3)","splice","1, 3",", 3",null]]
console.log(
  ".splice(2, 0, 'b.a')".matchAll(
    /\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g
  )
); // ✅ | [[".splice(2, 0, \"b.a\")","splice","2, 0, \"b.a\"",", 0",", \"b.a\""]]
console.log(
  ".splice(3, 0, 'c.a', 'c.b')".matchAll(
    /\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g
  )
); // ✅ | [[".splice(3, 0, \"c.a\", \"c.b\")","splice","3, 0, \"c.a\", \"c.b\"",", 0",", \"c.a\", \"c.b\""]]
console.log(
  ".splice(-1, 3)".matchAll(
    /\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g
  )
); // ✅ | [[".splice(-1, 3)","splice","-1, 3",", 3",null]]
console.log(
  ".splice(-1, -3)".matchAll(
    /\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g
  )
); // ✅ | [[".splice(-1, -3)","splice","-1, -3",", -3",null]]
console.log(
  ".splice(1, -3)".matchAll(
    /\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g
  )
); // ✅ | [[".splice(1, -3)","splice","1, -3",", -3",null]]
console.log(
  ".splice(-1)".matchAll(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g)
); // ✅ | [[".splice(-1)","splice","-1",null,null]]
console.log(
  ".splice()".matchAll(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g)
); // ❌ | []

// {{exact}: [Example => Colombian phone number]}
const regex11 = /^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/;
console.log("3113728898".matchAll(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/g)); // ✅ | [["3113728898",null]]
console.log("311-372-8898".matchAll(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/g)); // ✅ | [["311-372-8898",null]]
console.log("311 372 8898".matchAll(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/g)); // ✅ | [["311 372 8898",null]]
console.log(
  "+57 3113728898".matchAll(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/g)
); // ✅ | [["+57 3113728898","+57 "]]
console.log(
  "+57 311-372-8898".matchAll(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/g)
); // ✅ | [["+57 311-372-8898","+57 "]]
console.log(
  "+57 311 372 8898".matchAll(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/g)
); // ✅ | [["+57 311 372 8898","+57 "]]
console.log("311372 8898".matchAll(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/g)); // ❌ | [["311372 8898",null]]
console.log("311372-8898".matchAll(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/g)); // ❌ | [["311372-8898",null]]
console.log("311372889".matchAll(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/g)); // ❌ | []
console.log("4113728898".matchAll(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/g)); // ❌ | []
console.log("3113728898s".matchAll(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/g)); // ❌ | []
console.log(
  "311-372-8898-".matchAll(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/g)
); // ❌ | []
console.log(
  "+57311-372-8898".matchAll(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/g)
); // ❌ | []

// {{min,max}: [Example => Zip code with numbers and its length between 3 and 6]}
const regex12 = /^\d{3,6}$/;
console.log("123456".matchAll(/^\d{3,6}$/g)); // ✅ | [["123456"]]
console.log("12345".matchAll(/^\d{3,6}$/g)); // ✅ | [["12345"]]
console.log("1234".matchAll(/^\d{3,6}$/g)); // ✅ | [["1234"]]
console.log("123".matchAll(/^\d{3,6}$/g)); // ✅ | [["123"]]
console.log("1234567".matchAll(/^\d{3,6}$/g)); // ❌ | []
console.log("12345c".matchAll(/^\d{3,6}$/g)); // ❌ | []
console.log("12".matchAll(/^\d{3,6}$/g)); // ❌ | []

// {{min,}: Length equals or greater than min}
const regex13 = /^\d{3,}$/;
console.log("12345".matchAll(/^\d{3,}$/g)); // ✅ | [["12345"]]
console.log("1234".matchAll(/^\d{3,}$/g)); // ✅ | [["1234"]]
console.log("123".matchAll(/^\d{3,}$/g)); // ✅ | [["123"]]
console.log("123c".matchAll(/^\d{3,}$/g)); // ❌ | []
console.log("12".matchAll(/^\d{3,}$/g)); // ❌ | []

// {{min,max}: [Example => Password with digits, lowercase and uppercase letters and some special characters]}
const regex14 = /([A-Z]+[a-z]+\d+)/;
console.log("Diego123".matchAll(/([A-Z]+[a-z]+\d+)/g)); // ✅ | [["Diego123","Diego123"]]
console.log("123diegoRayo".matchAll(/([A-Z]+[a-z]+\d+)/g)); // ❌ | []
