const express = require("express")
const app = express()
const PORT = 3000

app.use(express.json())

//in memory variable to store the data

const users = []


const generateToken = () =>{
    const hashes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    let token = ""
    for(let i = 0; i < 10; i++){
        token += hashes[Math.floor(Math.random() * hashes.length)]
    }

    return token
}


app.post("/signup", (req, res)=>{
    const { username , password } = req.body

    // first check karo ki banda apane data base me hai ya nahi??
    // const user  = users.map((ele)=>{
    //     if(ele.username == username){
    //         return true
    //     }
    // })

    // if(user[0] == true){
    //     return res.status(411).json({
    //         msg : "User already exist in database Try chosing different username"
    //     })
    // }

    if(users.find((u)=> u.username == username)){
        return res.status(411).json({
            msg : "User already exist in database Try chosing different username",
            
        })
    }

    // create token

    // push the user in to the database



    users.push({
        username,
        password,
    })


    // token genearte karo and user ko send karo
    const token  = generateToken()
    req.headers.authorization = token

    res.status(200).json({
        msg : "Yo! Signup successfull",
        token : token
    })
    console.log(users)

})

app.post("/signin", (req, res)=>{
    // check karo users database me exist krta hai ya nahi
    const username = req.body.username
    const password = req.body.password

    const user = users.find((u)=>{
        if(u.username == username && u.password == password){
            return true
        }
    })

    if(user){
        const token = generateToken()
        user.token = token
        res.status(200).json({
            msg : "Sign in successfull",
            token : token
        })
    } else {
        res.status(403).json({
            msg : "user not found in db"
        })
    }

    // agar user exist karta hai to token generate and then user ko send karo
})


app.get("/me", (req, res)=>{
    const token = req.headers.authorization

    const user = users.find((user) => user.token == token)

    if(user){
        res.status(200).json({
            username : user.username,
            password : user.password             
        })
    } else {
        res.status(403).json({
            msg : "User not found"
        })
    }
})

app.listen(PORT, ()=>{
    console.log(`This app is listening on port ${PORT}`)
})