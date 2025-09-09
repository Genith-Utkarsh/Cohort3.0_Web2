const express = require("express")
const app = express()

const PORT = 3000
app.use(express.json())      // kind of body parser


app.get("/person", (req, res)=>{
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    res.send(`Hello ${firstName}`)
})

app.listen(PORT)