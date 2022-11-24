// ### ".test" examples ###

/*
- Return: boolean
- Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
*/

// {\: (backslash) to escape special characters}
const regex1 = /a\.b/;
console.log(/a\.b/.test("123 a.b 123")); // ✅ | true
console.log(/a\.b/.test("a.b c a.b")); // ✅ | true
console.log(/a\.b/.test("a.b")); // ✅ | true
console.log(/a\.b/.test("aa.bb")); // ✅ | true
console.log(/a\.b/.test("")); // ❌ | false
console.log(/a\.b/.test(" a*b ")); // ❌ | false
console.log(/a\.b/.test("ab")); // ❌ | false
console.log(/a\.b/.test(".")); // ❌ | false

// {\d: any digit between 0 and 9 | \d = [0-9]}
const regex2 = /\d/;
console.log(/\d/.test("1a2a3")); // ✅ | true
console.log(/\d/.test("a 3")); // ✅ | true
console.log(/\d/.test("3")); // ✅ | true
console.log(/\d/.test("")); // ❌ | false
console.log(/\d/.test(" ")); // ❌ | false
console.log(/\d/.test("r")); // ❌ | false

// {\w: (All word characters => [a-z], [A-Z], [0-9], [_]}
const regex3 = /^[\w]+$/;
console.log(/^[\w]+$/.test("5jhdAe2")); // ✅ | true
console.log(/^[\w]+$/.test("_")); // ✅ | true
console.log(/^[\w]+$/.test("2")); // ✅ | true
console.log(/^[\w]+$/.test("sferwf")); // ✅ | true
console.log(/^[\w]+$/.test("123_ddDE_Ad")); // ✅ | true
console.log(/^[\w]+$/.test("123AAd frfr DFD")); // ❌ | false
console.log(/^[\w]+$/.test("1A{][]}")); // ❌ | false
console.log(/^[\w]+$/.test("b--$$$3")); // ❌ | false
console.log(/^[\w]+$/.test("")); // ❌ | false
console.log(/^[\w]+$/.test(" ")); // ❌ | false
console.log(/^[\w]+$/.test("~!@#$%^&*()+")); // ❌ | false

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
console.log(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/.test(".splice(1)")); // ✅ | true
console.log(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/.test(".splice(1, 1)")); // ✅ | true
console.log(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/.test(".splice(1, 3)")); // ✅ | true
console.log(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/.test(".splice(2, 0, 'b.a')")); // ✅ | true
console.log(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/.test(".splice(3, 0, 'c.a', 'c.b')")); // ✅ | true
console.log(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/.test(".splice(-1, 3)")); // ✅ | true
console.log(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/.test(".splice(-1, -3)")); // ✅ | true
console.log(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/.test(".splice(1, -3)")); // ✅ | true
console.log(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/.test(".splice(-1)")); // ✅ | true
console.log(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/.test(".splice()")); // ❌ | false

// {{exact}: [Example => Colombian phone number]}
const regex11 = /^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/;
console.log(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/.test("3113728898")); // ✅ | true
console.log(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/.test("311-372-8898")); // ✅ | true
console.log(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/.test("311 372 8898")); // ✅ | true
console.log(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/.test("+57 3113728898")); // ✅ | true
console.log(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/.test("+57 311-372-8898")); // ✅ | true
console.log(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/.test("+57 311 372 8898")); // ✅ | true
console.log(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/.test("311372 8898")); // ❌ | true
console.log(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/.test("311372-8898")); // ❌ | true
console.log(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/.test("311372889")); // ❌ | false
console.log(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/.test("4113728898")); // ❌ | false
console.log(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/.test("3113728898s")); // ❌ | false
console.log(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/.test("311-372-8898-")); // ❌ | false
console.log(/^(\+57 )?3\d{2}[-, ]?\d{3}[-, ]?\d{4}$/.test("+57311-372-8898")); // ❌ | false

// {{min,max}: [Example => Zip code with numbers and its length between 3 and 6]}
const regex12 = /^\d{3,6}$/;
console.log(/^\d{3,6}$/.test("123456")); // ✅ | true
console.log(/^\d{3,6}$/.test("12345")); // ✅ | true
console.log(/^\d{3,6}$/.test("1234")); // ✅ | true
console.log(/^\d{3,6}$/.test("123")); // ✅ | true
console.log(/^\d{3,6}$/.test("1234567")); // ❌ | false
console.log(/^\d{3,6}$/.test("12345c")); // ❌ | false
console.log(/^\d{3,6}$/.test("12")); // ❌ | false

// {{min,}: Length equals or greater than min}
const regex13 = /^\d{3,}$/;
console.log(/^\d{3,}$/.test("12345")); // ✅ | true
console.log(/^\d{3,}$/.test("1234")); // ✅ | true
console.log(/^\d{3,}$/.test("123")); // ✅ | true
console.log(/^\d{3,}$/.test("123c")); // ❌ | false
console.log(/^\d{3,}$/.test("12")); // ❌ | false

// {{min,max}: [Example => Password with digits, lowercase and uppercase letters and some special characters]}
const regex14 = /([A-Z]+[a-z]+\d+)/;
console.log(/([A-Z]+[a-z]+\d+)/.test("Diego123")); // ✅ | true
console.log(/([A-Z]+[a-z]+\d+)/.test("123diegoRayo")); // ❌ | false

