const fs = require("fs")

const content = fs.readFileSync("a.txt", "utf-8")             // readFileSync("PATH_TO_FILE", "ENCODING")
console.log(content)