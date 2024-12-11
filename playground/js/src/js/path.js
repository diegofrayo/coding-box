const path = require("path");
const Utils = require("../utils");

const FOLDER_PATH = "C:/Users/dfray/Downloads/";

console.log("'path' cheatsheet |", Utils.toString(FOLDER_PATH, true));
console.log("> basename:", Utils.toString(path.basename(FOLDER_PATH), true));
console.log("> delimiter:", Utils.toString(path.delimiter, true));
console.log("> dirname:", Utils.toString(path.dirname(FOLDER_PATH), true));
console.log("> extname:", Utils.toString(path.extname(FOLDER_PATH), true));
console.log(
  "> format:",
  Utils.toString(path.format(path.parse(FOLDER_PATH)), true)
);
console.log(
  "> isAbsolute:",
  Utils.toString(path.isAbsolute(FOLDER_PATH), true)
);
console.log(
  "> join:",
  Utils.toString(path.join(FOLDER_PATH, "hola.jpg"), true)
);
console.log("> parse:", Utils.toString(path.parse(FOLDER_PATH), true));
console.log(
  "> resolve:",
  Utils.toString(path.resolve(FOLDER_PATH, "hola.jpg"), true)
);
console.log("> sep:", Utils.toString(path.sep, true));
console.log(
  "> toNamespacedPath:",
  Utils.toString(path.toNamespacedPath(FOLDER_PATH), true)
);
console.log("");

// --- ---

const FILE_PATH = "/Users/diegofrayo/Pictures/Mis fotos/Biblioteca/picture.jpg";

console.log("'path' cheatsheet |", Utils.toString(FILE_PATH, true));
console.log("> basename:", Utils.toString(path.basename(FILE_PATH), true));
console.log("> delimiter:", Utils.toString(path.delimiter, true));
console.log("> dirname:", Utils.toString(path.dirname(FILE_PATH), true));
console.log("> extname:", Utils.toString(path.extname(FILE_PATH), true));
console.log(
  "> format:",
  Utils.toString(path.format(path.parse(FILE_PATH)), true)
);
console.log("> isAbsolute:", Utils.toString(path.isAbsolute(FILE_PATH), true));
console.log("> join:", Utils.toString(path.join(FILE_PATH, "hola.jpg"), true));
console.log("> parse:", Utils.toString(path.parse(FILE_PATH), true));
console.log(
  "> resolve:",
  Utils.toString(path.resolve(FILE_PATH, "hola.jpg"), true)
);
console.log("> sep:", Utils.toString(path.sep, true));
console.log(
  "> toNamespacedPath:",
  Utils.toString(path.toNamespacedPath(FILE_PATH), true)
);
console.log("");
