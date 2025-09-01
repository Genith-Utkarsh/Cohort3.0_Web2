const fs = require("fs")

function readContent() {
    return new Promise(function(resolve, reject) {
        // async code 
        fs.readFile("sample.txt", "utf-8", function(err, data){
            if(err) reject("file not found")
            else  resolve(data)
           
            
        })
    })
}

// using .then and .catch

readContent()
.then(function(content){
    console.log(content)
})
.catch(function(err){
    console.log(err)
})


// using async await

async function finalData() {
    const content  = await readContent()
    console.log(content)
}

finalData()