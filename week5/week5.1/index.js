const express = require("express")
const app = express()

const PORT = 3000

app.use(express.json())

app.get("/sum/:a/:b", (req, res)=>{
    const a = Number(req.params.a)
    const b = Number(req.params.b)

    const result = a + b;

    res.send(`Answer => ${result}`)
    
})

app.get("/sub", (req, res)=>{
    const a = req.query.a
    const b = req.query.b

    const result = a - b;

    res.send(`Answer => ${result}`)
})

app.get("/mutiply", (req, res)=>{
    const a = req.query.a
    const b = req.query.b

    const result = a * b;

    res.send(`Answer => ${result}`)
})

app.get("/divide", (req, res)=>{
    const a = req.query.a
    const b = req.query.b

    if(b == 0){
        return res.status(411).send("value of b should not be 0")
    }

    const result = a / b;

    res.send(`Answer => ${result}`)
})

app.listen(PORT, ()=>{
    console.log(`This app is listening on port ${PORT}`)
})