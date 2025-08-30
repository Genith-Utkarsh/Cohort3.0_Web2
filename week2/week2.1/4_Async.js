const fs = require("fs")

function logThings(err, data){
    if(err) return console.log(err)
    console.log(data)
}

fs.readFile("a.txt", "utf-8", logThings)

fs.readFile("b.txt", "utf-8", logThings)

console.log("Done")
