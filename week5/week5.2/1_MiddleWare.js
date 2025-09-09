const express = require("express")
const app = express()

const PORT = 3000

function someMiddleWare(req, res, next){
    req.name = "Utkarsh"
    next()
}

app.get("/person",someMiddleWare,  (req, res)=>{
    const firstName = req.name 
    res.send(`Hello ${firstName}`)
})

app.listen(PORT)