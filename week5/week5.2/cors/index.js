const express = require("express")
const app = express()
const cors = require("cors")

app.use(express.json())

const PORT = 3000

app.use(cors({}))

app.get("/sum", (req, res)=>{
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)

    const result = a + b;

    res.send(result.toString())
})

app.listen(PORT)