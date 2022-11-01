// ### .exec examples ###

// {\: (backslash) to escape special characters}
const regex1 = /a\.b/;
console.log(/a\.b/g.exec("a.b")); // [{"match":"a.b","index":0}]
console.log(/a\.b/g.exec("aa.bb.")); // [{"match":"a.b","index":1}]
console.log(/a\.b/g.exec("ab")); // []

// {\d: any digit between 0 and 9 | \d = [0-9]}
const regex2 = /\d/;
console.log(/\d/g.exec("1a.b")); // [{"match":"1","index":0}]
console.log(/\d/g.exec("aa.2bb.")); // [{"match":"2","index":3}]
console.log(/\d/g.exec("ab")); // []

// {\w: (all word characters) a to z, A to Z, _ (underscore) | \w = [0-9a-zA-Z]}
const regex3 = /[0-9a-zA-Z]/;
console.log(/[0-9a-zA-Z]/g.exec("5")); // [{"match":"5","index":0}]
console.log(/[0-9a-zA-Z]/g.exec("b")); // [{"match":"b","index":0}]
console.log(/[0-9a-zA-Z]/g.exec("G")); // [{"match":"G","index":0}]
console.log(/[0-9a-zA-Z]/g.exec("1a")); // [{"match":"1","index":0},{"match":"a","index":1}]
console.log(/[0-9a-zA-Z]/g.exec("aB")); // [{"match":"a","index":0},{"match":"B","index":1}]
console.log(/[0-9a-zA-Z]/g.exec("1A")); // [{"match":"1","index":0},{"match":"A","index":1}]
console.log(/[0-9a-zA-Z]/g.exec("1A{][]}")); // [{"match":"1","index":0},{"match":"A","index":1}]
console.log(/[0-9a-zA-Z]/g.exec("")); // []
console.log(/[0-9a-zA-Z]/g.exec("^")); // []

// {\s: (whitespaces)}
const regex4 = /\s/;
console.log(/\s/g.exec("1a.b")); // []
console.log(/\s/g.exec("aa .2bb.")); // [{"match":" ","index":2}]
console.log(/\s/g.exec("")); // []
console.log(/\s/g.exec(".")); // []

// {\n: (line-breaks)}
const regex5 = /\n/;
console.log(/\n/g.exec("fdd\ndd")); // [{"match":"\n","index":3}]
console.log(/\n/g.exec("aa .2bb.")); // []
console.log(/\n/g.exec("")); // []
console.log(/\n/g.exec(".")); // []

// {.: any single character}
const regex6 = /./;
console.log(/./g.exec("fdddd")); // [{"match":"f","index":0},{"match":"d","index":1},{"match":"d","index":2},{"match":"d","index":3},{"match":"d","index":4}]
console.log(/./g.exec("aa .2bb.")); // [{"match":"a","index":0},{"match":"a","index":1},{"match":" ","index":2},{"match":".","index":3},{"match":"2","index":4},{"match":"b","index":5},{"match":"b","index":6},{"match":".","index":7}]
console.log(/./g.exec("")); // []
console.log(/./g.exec(".c")); // [{"match":".","index":0},{"match":"c","index":1}]
console.log(/./g.exec("2")); // [{"match":"2","index":0}]
console.log(/./g.exec(" ")); // [{"match":" ","index":0}]

// {.*: any single character (Zero or more of a, input has to start with a, it takes all)}
const regex7 = /\d*/;
console.log(/\d*/g.exec("123 343 kfjekjfre 9")); // [{"match":"123","index":0}]
console.log(/\d*/g.exec("aa32 .2bb.")); // []
console.log(/\d*/g.exec("23")); // [{"match":"23","index":0}]
console.log(/\d*/g.exec(".c3")); // []
console.log(/\d*/g.exec("2")); // [{"match":"2","index":0}]
console.log(/\d*/g.exec("s 2")); // []

// {.+: any single character (One or more of a, input does not have to start with a, it takes all)}
const regex8 = /\d+/;
console.log(/\d+/g.exec("123 d 343 hf 9")); // [{"match":"123","index":0},{"match":"343","index":6},{"match":"9","index":13}]
console.log(/\d+/g.exec("aa32 .2bb.")); // [{"match":"32","index":2},{"match":"2","index":6}]
console.log(/\d+/g.exec("23")); // [{"match":"23","index":0}]
console.log(/\d+/g.exec(".c3 jd3")); // [{"match":"3","index":2},{"match":"3","index":6}]
console.log(/\d+/g.exec("2")); // [{"match":"2","index":0}]
console.log(/\d+/g.exec("s 2")); // [{"match":"2","index":2}]

// {.?: any single character (Zero or one of a, input has to start with a, it takes only one match)}
const regex9 = /\d?/;
console.log(/\d?/g.exec("123 d 343 hf 9")); // [{"match":"1","index":0},{"match":"2","index":1},{"match":"3","index":2}]
console.log(/\d?/g.exec("aa32 .2bb.")); // []
console.log(/\d?/g.exec("23")); // [{"match":"2","index":0},{"match":"3","index":1}]
console.log(/\d?/g.exec(".c3 jd3")); // []
console.log(/\d?/g.exec("2")); // [{"match":"2","index":0}]
console.log(/\d?/g.exec("s 2")); // []

// {.splice}
const regex10 = /\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/;
console.log(
  /\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g.exec(".splice(1)")
); // [{"match":".splice(1)","index":0}]
console.log(
  /\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g.exec(".splice(1, 1)")
); // [{"match":".splice(1, 1)","index":0}]
console.log(
  /\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g.exec(".splice(1, 3)")
); // [{"match":".splice(1, 3)","index":0}]
console.log(
  /\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g.exec(
    ".splice(2, 0, 'b.a')"
  )
); // [{"match":".splice(2, 0, \"b.a\")","index":0}]
console.log(
  /\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g.exec(
    ".splice(3, 0, 'c.a', 'c.b')"
  )
); // [{"match":".splice(3, 0, \"c.a\", \"c.b\")","index":0}]
console.log(
  /\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g.exec(".splice(-1, 3)")
); // [{"match":".splice(-1, 3)","index":0}]
console.log(
  /\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g.exec(".splice(-1, -3)")
); // [{"match":".splice(-1, -3)","index":0}]
console.log(
  /\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g.exec(".splice(1, -3)")
); // [{"match":".splice(1, -3)","index":0}]
console.log(
  /\.([a-z]{1,15})\((-?\d(, -?\d){0,1}(, ".*"){0,})\)/g.exec(".splice(-1)")
); // [{"match":".splice(-1)","index":0}]
