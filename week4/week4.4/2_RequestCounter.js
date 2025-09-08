const express = require("express")
const app = express()

let count = 0
const requestCounter = (req, res, next) => {
    count++
    next()
}

app.use(requestCounter)

app.get("/", (req, res) => {
    res.send(`You visited this page = ${count}`)
})

app.listen(3000)