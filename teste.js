
// Importar CommomJS
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const x2 = require("./modulo2.cjs")

// importar ES6
import x from "./modulo.js"

console.log("teste");
console.log(x);
console.log(x2);