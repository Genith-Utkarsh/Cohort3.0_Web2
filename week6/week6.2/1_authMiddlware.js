const express = require("express")
const app = express()
const jwt = require("jsonwebtoken")
const JWT_SECRET = "measme"

const users = []

function authMiddleWare(req, res, next){
    const token = req.headers.token
    const decoded = jwt.verify(token, JWT_SECRET)

    if(!decoded){
        res.status(403).json({
            message : "Please sign in again"
        })
    } else {
        req.username = decoded.username
        next()
    }


}


// decodedUsername = req.username

app.listen(3000)