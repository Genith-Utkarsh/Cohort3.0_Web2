const express = require("express")
const app = express()


// request resetter 
const numberofrequest= {}
setInterval(()=>{
    numberofrequest = {}
}, 1000)

app.use((req, res, next)=>{
    const userId = req.headers.userId
    if(numberofrequest[userId]){
        numberofrequest[userId]++
        if(numberofrequest[userId] > 5){
            res.status(400).send("Limited request allowes per second")
        } else {
            next()
        }
    }else {
        numberofrequest[userId] = 1;
        next()
    }
})

app.get("/", (req, res)=> {
    res.send("Hi there")
})

app.listen(3000)