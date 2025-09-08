const express = require("express")
const app = express()

app.get("/", (req, res)=>{
    const a = req.query.a
    const b = a.length

    res.send("done")
})

app.use((err, req, res, next)=>{
    res.status(404).send({})
})

app.listen(3000)