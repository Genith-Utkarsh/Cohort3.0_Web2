const express = require("express")
const app = express()

const PORT = 3000

function someMiddleWare(req, res, next){
    req.name = "Utkarsh"
    next()
}

function loggerMiddleWare(req, res, next){
    console.log(req.method)
    next()
}
app.use(loggerMiddleWare)

app.get("/person",someMiddleWare,  (req, res)=>{
    const firstName = req.name 
    res.send(`Hello ${firstName}`)
})

app.listen(PORT)