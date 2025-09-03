const express = require("express")
const app = express()

const PORT = 3000

app.get("/todos", (req, res) => {
    res.json({
        todos
    })
})

app.post("/addTodo", (req, res)=> {
    res.send("Add todo")
})

app.listen(prompt, function(){
    console.log(`This app is listening on port ${PORT}`)
})