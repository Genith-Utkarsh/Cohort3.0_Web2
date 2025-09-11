const express = require("express")
const jwt = require("jsonwebtoken")

const app = express()
const PORT = 3000
const JWT_SECRET = "measme"

app.use(express.json())

const users = []

app.post("/signup", (req, res)=>{
    const username = req.body.username
    const password = req.body.password

    // pehle check karo ki user db me exist krta hai ya nahi
    const userFound = users.find((user)=> user.username == username)

    if(userFound){
        return res.status(411).json({
            msg : "User already exist in our db Try choosing different username"
        })
    }

    // agar db me nahi hai to User ko db me push karo

    users.push({
        username,
        password
    })

    res.status(200).json({
        message : "Yo! Signup successfull"
    })
    console.log(users)
})

app.post("/signin", (req, res)=>{
    const username = req.body.username
    const password = req.body.password

    const userFound = users.find((user)=> user.username == username && user.password == password)

    if(userFound){
        const payload = {username : username}
        const token = jwt.sign(payload, JWT_SECRET)

        return res.status(200).json({
            message : "Sign in successfull",
            token :token
        })
    }

    res.status(403).json({
        message : "User not found consider checking inputs"
    })

    console.log(users)
})


app.get("/me", (req, res)=>{
    const token = req.headers.token
    const decoded = jwt.verify(token, JWT_SECRET)

    if(!decoded){
        return res.status(411).json({
            message : "Token invalid or missing"
        })
    }

    res.status(200).json({
        info : decoded.username
    })

})

app.listen(PORT, ()=>{
    console.log(`This app is listening on port ${PORT}`)
})