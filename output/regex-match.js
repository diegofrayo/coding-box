// ### .match examples ###

// {\: (backslash) to escape special characters}
const regex1 = /a\.b/;
console.log("a.b".match(/a\.b/)); // ["a.b"]
console.log("aa.bb.".match(/a\.b/)); // ["a.b"]
console.log("ab".match(/a\.b/)); // null

// {\d: any digit between 0 and 9 | \d = [0-9]}
const regex2 = /\d/;
console.log("1a.b".match(/\d/)); // ["1"]
console.log("aa.2bb.".match(/\d/)); // ["2"]
console.log("ab".match(/\d/)); // null

// {\w: (all word characters) a to z, A to Z, _ (underscore) | \w = [0-9a-zA-Z]}
const regex3 = /[0-9a-zA-Z]/;
console.log("5".match(/[0-9a-zA-Z]/)); // ["5"]
console.log("b".match(/[0-9a-zA-Z]/)); // ["b"]
console.log("G".match(/[0-9a-zA-Z]/)); // ["G"]
console.log("1a".match(/[0-9a-zA-Z]/)); // ["1"]
console.log("aB".match(/[0-9a-zA-Z]/)); // ["a"]
console.log("1A".match(/[0-9a-zA-Z]/)); // ["1"]
console.log("1A{][]}".match(/[0-9a-zA-Z]/)); // ["1"]
console.log("".match(/[0-9a-zA-Z]/)); // null
console.log("^".match(/[0-9a-zA-Z]/)); // null

// {\s: (whitespaces)}
const regex4 = /\s/;
console.log("1a.b".match(/\s/)); // null
console.log("aa .2bb.".match(/\s/)); // [" "]
console.log("".match(/\s/)); // null
console.log(".".match(/\s/)); // null

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
console.log("aa32 .2bb.".match(/\d*/)); // [""]
console.log("23".match(/\d*/)); // ["23"]
console.log(".c3".match(/\d*/)); // [""]
console.log("2".match(/\d*/)); // ["2"]
console.log("s 2".match(/\d*/)); // [""]

// {.+: any single character (One or more of a, input does not have to start with a, it takes all)}
const regex8 = /\d+/;
console.log("123 d 343 hf 9".match(/\d+/)); // ["123"]
console.log("aa32 .2bb.".match(/\d+/)); // ["32"]
console.log("23".match(/\d+/)); // ["23"]
console.log(".c3 jd3".match(/\d+/)); // ["3"]
console.log("2".match(/\d+/)); // ["2"]
console.log("s 2".match(/\d+/)); // ["2"]

// {.?: any single character (Zero or one of a, input has to start with a, it takes only one match)}
const regex9 = /\d?/;
console.log("123 d 343 hf 9".match(/\d?/)); // ["1"]
console.log("aa32 .2bb.".match(/\d?/)); // [""]
console.log("23".match(/\d?/)); // ["2"]
console.log(".c3 jd3".match(/\d?/)); // [""]
console.log("2".match(/\d?/)); // ["2"]
console.log("s 2".match(/\d?/)); // [""]

// {.splice}
const regex10 = /\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/;
console.log(
  ".splice(1)".match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/)
); // ["splice","1"]
console.log(
  ".splice(1, 1)".match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/)
); // ["splice","1, 1"]
console.log(
  ".splice(1, 3)".match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/)
); // ["splice","1, 3"]
console.log(
  ".splice(2, 0, 'b.a')".match(
    /\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/
  )
); // ["splice","2, 0, \"b.a\""]
console.log(
  ".splice(3, 0, 'c.a', 'c.b')".match(
    /\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/
  )
); // ["splice","3, 0, \"c.a\", \"c.b\""]
console.log(
  ".splice(-1, 3)".match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/)
); // ["splice","-1, 3"]
console.log(
  ".splice(-1, -3)".match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/)
); // ["splice","-1, -3"]
console.log(
  ".splice(1, -3)".match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/)
); // ["splice","1, -3"]
console.log(
  ".splice(-1)".match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/)
); // ["splice","-1"]
