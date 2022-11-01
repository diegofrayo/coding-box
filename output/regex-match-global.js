// ### .match(withGlobal)  examples ###

// {\: (backslash) to escape special characters}
const regex1 = /a\.b/;
console.log("a.b".match(/a\.b/g)); // ["a.b"]
console.log("aa.bb.".match(/a\.b/g)); // ["a.b"]
console.log("ab".match(/a\.b/g)); // null

// {\d: any digit between 0 and 9 | \d = [0-9]}
const regex2 = /\d/;
console.log("1a.b".match(/\d/g)); // ["1"]
console.log("aa.2bb.".match(/\d/g)); // ["2"]
console.log("ab".match(/\d/g)); // null

// {\w: (all word characters) a to z, A to Z, _ (underscore) | \w = [0-9a-zA-Z]}
const regex3 = /[0-9a-zA-Z]/;
console.log("5".match(/[0-9a-zA-Z]/g)); // ["5"]
console.log("b".match(/[0-9a-zA-Z]/g)); // ["b"]
console.log("G".match(/[0-9a-zA-Z]/g)); // ["G"]
console.log("1a".match(/[0-9a-zA-Z]/g)); // ["1","a"]
console.log("aB".match(/[0-9a-zA-Z]/g)); // ["a","B"]
console.log("1A".match(/[0-9a-zA-Z]/g)); // ["1","A"]
console.log("1A{][]}".match(/[0-9a-zA-Z]/g)); // ["1","A"]
console.log("".match(/[0-9a-zA-Z]/g)); // null
console.log("^".match(/[0-9a-zA-Z]/g)); // null

// {\s: (whitespaces)}
const regex4 = /\s/;
console.log("1a.b".match(/\s/g)); // null
console.log("aa .2bb.".match(/\s/g)); // [" "]
console.log("".match(/\s/g)); // null
console.log(".".match(/\s/g)); // null

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
console.log("aa32 .2bb.".match(/\d*/g)); // ["","","32","","","2","","","",""]
console.log("23".match(/\d*/g)); // ["23",""]
console.log(".c3".match(/\d*/g)); // ["","","3",""]
console.log("2".match(/\d*/g)); // ["2",""]
console.log("s 2".match(/\d*/g)); // ["","","2",""]

// {.+: any single character (One or more of a, input does not have to start with a, it takes all)}
const regex8 = /\d+/;
console.log("123 d 343 hf 9".match(/\d+/g)); // ["123","343","9"]
console.log("aa32 .2bb.".match(/\d+/g)); // ["32","2"]
console.log("23".match(/\d+/g)); // ["23"]
console.log(".c3 jd3".match(/\d+/g)); // ["3","3"]
console.log("2".match(/\d+/g)); // ["2"]
console.log("s 2".match(/\d+/g)); // ["2"]

// {.?: any single character (Zero or one of a, input has to start with a, it takes only one match)}
const regex9 = /\d?/;
console.log("123 d 343 hf 9".match(/\d?/g)); // ["1","2","3","","","","3","4","3","","","","","9",""]
console.log("aa32 .2bb.".match(/\d?/g)); // ["","","3","2","","","2","","","",""]
console.log("23".match(/\d?/g)); // ["2","3",""]
console.log(".c3 jd3".match(/\d?/g)); // ["","","3","","","","3",""]
console.log("2".match(/\d?/g)); // ["2",""]
console.log("s 2".match(/\d?/g)); // ["","","2",""]

// {.splice}
const regex10 = /\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/;
console.log(
  ".splice(1)".match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g)
); // [".splice(1)"]
console.log(
  ".splice(1, 1)".match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g)
); // [".splice(1, 1)"]
console.log(
  ".splice(1, 3)".match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g)
); // [".splice(1, 3)"]
console.log(
  ".splice(2, 0, 'b.a')".match(
    /\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g
  )
); // [".splice(2, 0, \"b.a\")"]
console.log(
  ".splice(3, 0, 'c.a', 'c.b')".match(
    /\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g
  )
); // [".splice(3, 0, \"c.a\", \"c.b\")"]
console.log(
  ".splice(-1, 3)".match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g)
); // [".splice(-1, 3)"]
console.log(
  ".splice(-1, -3)".match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g)
); // [".splice(-1, -3)"]
console.log(
  ".splice(1, -3)".match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g)
); // [".splice(1, -3)"]
console.log(
  ".splice(-1)".match(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g)
); // [".splice(-1)"]
