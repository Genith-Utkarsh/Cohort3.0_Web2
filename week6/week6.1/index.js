const express = requrie("express")
const app = express()
const PORT = 3000

app.use(express.json())

//in memory variable to store the data

const users = []


const generateToken = () =>{

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
        return res.staus(411).json({
            msg : "User already exist in database Try chosing different username"
        })
    }

    // create token

    // push the user in to the database



    users.push({
        username,
        password,
    })


    // token genearte karo and user ko send karo


})

app.post("/signin", (req, res)=>{
    // check karo users database me exist krta hai ya nahi


    // agar user exist karta hai to token generate and then user ko send karo
})

app.listen(PORT, ()=>{
    console.log(`This app is listening on port ${PORT}`)
})