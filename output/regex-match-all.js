// ### .matchAll examples ###

// {\: (backslash) to escape special characters}
const regex1 = /a\.b/;
console.log("a.b".matchAll(/a\.b/g)); // ["a.b"]
console.log("aa.bb.".matchAll(/a\.b/g)); // ["a.b"]
console.log("ab".matchAll(/a\.b/g)); // []

// {\d: any digit between 0 and 9 | \d = [0-9]}
const regex2 = /\d/;
console.log("1a.b".matchAll(/\d/g)); // ["1"]
console.log("aa.2bb.".matchAll(/\d/g)); // ["2"]
console.log("ab".matchAll(/\d/g)); // []

// {\w: (all word characters) a to z, A to Z, _ (underscore) | \w = [0-9a-zA-Z]}
const regex3 = /[0-9a-zA-Z]/;
console.log("5".matchAll(/[0-9a-zA-Z]/g)); // ["5"]
console.log("b".matchAll(/[0-9a-zA-Z]/g)); // ["b"]
console.log("G".matchAll(/[0-9a-zA-Z]/g)); // ["G"]
console.log("1a".matchAll(/[0-9a-zA-Z]/g)); // ["1","a"]
console.log("aB".matchAll(/[0-9a-zA-Z]/g)); // ["a","B"]
console.log("1A".matchAll(/[0-9a-zA-Z]/g)); // ["1","A"]
console.log("1A{][]}".matchAll(/[0-9a-zA-Z]/g)); // ["1","A"]
console.log("".matchAll(/[0-9a-zA-Z]/g)); // []
console.log("^".matchAll(/[0-9a-zA-Z]/g)); // []

// {\s: (whitespaces)}
const regex4 = /\s/;
console.log("1a.b".matchAll(/\s/g)); // []
console.log("aa .2bb.".matchAll(/\s/g)); // [" "]
console.log("".matchAll(/\s/g)); // []
console.log(".".matchAll(/\s/g)); // []

// {\n: (line-breaks)}
const regex5 = /\n/;
console.log("fdd\ndd".matchAll(/\n/g)); // ["\n"]
console.log("aa .2bb.".matchAll(/\n/g)); // []
console.log("".matchAll(/\n/g)); // []
console.log(".".matchAll(/\n/g)); // []

// {.: any single character}
const regex6 = /./;
console.log("fdddd".matchAll(/./g)); // ["f","d","d","d","d"]
console.log("aa .2bb.".matchAll(/./g)); // ["a","a"," ",".","2","b","b","."]
console.log("".matchAll(/./g)); // []
console.log(".c".matchAll(/./g)); // [".","c"]
console.log("2".matchAll(/./g)); // ["2"]
console.log(" ".matchAll(/./g)); // [" "]

// {.*: any single character (Zero or more of a, input has to start with a, it takes all)}
const regex7 = /\d*/;
console.log("123 343 kfjekjfre 9".matchAll(/\d*/g)); // ["123","","343","","","","","","","","","","","","9",""]
console.log("aa32 .2bb.".matchAll(/\d*/g)); // ["","","32","","","2","","","",""]
console.log("23".matchAll(/\d*/g)); // ["23",""]
console.log(".c3".matchAll(/\d*/g)); // ["","","3",""]
console.log("2".matchAll(/\d*/g)); // ["2",""]
console.log("s 2".matchAll(/\d*/g)); // ["","","2",""]

// {.+: any single character (One or more of a, input does not have to start with a, it takes all)}
const regex8 = /\d+/;
console.log("123 d 343 hf 9".matchAll(/\d+/g)); // ["123","343","9"]
console.log("aa32 .2bb.".matchAll(/\d+/g)); // ["32","2"]
console.log("23".matchAll(/\d+/g)); // ["23"]
console.log(".c3 jd3".matchAll(/\d+/g)); // ["3","3"]
console.log("2".matchAll(/\d+/g)); // ["2"]
console.log("s 2".matchAll(/\d+/g)); // ["2"]

// {.?: any single character (Zero or one of a, input has to start with a, it takes only one match)}
const regex9 = /\d?/;
console.log("123 d 343 hf 9".matchAll(/\d?/g)); // ["1","2","3","","","","3","4","3","","","","","9",""]
console.log("aa32 .2bb.".matchAll(/\d?/g)); // ["","","3","2","","","2","","","",""]
console.log("23".matchAll(/\d?/g)); // ["2","3",""]
console.log(".c3 jd3".matchAll(/\d?/g)); // ["","","3","","","","3",""]
console.log("2".matchAll(/\d?/g)); // ["2",""]
console.log("s 2".matchAll(/\d?/g)); // ["","","2",""]

// {.splice}
const regex10 = /\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/;
console.log(
  ".splice(1)".matchAll(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g)
); // [".splice(1)"]
console.log(
  ".splice(1, 1)".matchAll(
    /\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g
  )
); // [".splice(1, 1)"]
console.log(
  ".splice(1, 3)".matchAll(
    /\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g
  )
); // [".splice(1, 3)"]
console.log(
  ".splice(2, 0, 'b.a')".matchAll(
    /\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g
  )
); // [".splice(2, 0, \"b.a\")"]
console.log(
  ".splice(3, 0, 'c.a', 'c.b')".matchAll(
    /\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g
  )
); // [".splice(3, 0, \"c.a\", \"c.b\")"]
console.log(
  ".splice(-1, 3)".matchAll(
    /\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g
  )
); // [".splice(-1, 3)"]
console.log(
  ".splice(-1, -3)".matchAll(
    /\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g
  )
); // [".splice(-1, -3)"]
console.log(
  ".splice(1, -3)".matchAll(
    /\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g
  )
); // [".splice(1, -3)"]
console.log(
  ".splice(-1)".matchAll(/\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g)
); // [".splice(-1)"]
