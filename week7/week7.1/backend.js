const express = require("express");
const app = express();
const jwt = require("jsonwebtoken")
const { User, Todo } = require("./db.js");


//initialisation
const PORT = 3000;
const JWT_SECRET = "measme"

//MiddleWares

app.use(express.json())

const auth = async (req, res, next) => {
    const token = req.headers.token
    const responce = jwt.verify(token, JWT_SECRET)

    // finding _id of user

    const user = await User.findOne({email : responce.email})

    if(!token){
        return res.json({
            message : "Please sign in to access this field"
        })
    }

    if(!responce){
        res.json({
            message : "Token invalid"
        })
    } else {
        req._id = user._id
        next()
    }


};

//routes

app.post("/signup", async (req, res) => {
//   const { username, email, password } = req.body;
    const email = req.body.email
    const username = req.body.username
    const password = req.body.password

  // check if user in database or not
    const userFound = await User.findOne({email : email})

    if(userFound){
        return res.json({
            message : "User already exist"
        })
    }

  // if not
  const newUser =  await User.create({
        email,
        username,
        password
  })
  console.log(newUser)
  
  if(!newUser){
    return res.status(500).json({
        message : "Unable Sign Up"
    })
  }

  res.status(200).json({
    message : "Signup successfully"
  })
});

app.post("/signin", async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    const user = await User.findOne({
        email,
        password
    })

    if(!user){
        return res.json({
            message : "invalid credentials"
        })
    }

    const payload = {
        email
    }

    const token = jwt.sign(payload, JWT_SECRET)
    res.status(200).json({
        message : "Sign in successfully",
        token : token
    })
});

// authenticated routes

app.post("/todo", auth, async (req, res) => {
    const userId = req._id
    const title = req.body.title
    const description = req.body.description
    const isDone = req.body.isDone

    console.log(userId)

    const newTodo = await Todo.create({
        userId,
        title,
        description,
        isDone
    })
    
    console.log(newTodo)

    res.json({
        message : "Todo added successfully"
    })
    
});

app.get("/todos", auth, async (req, res) => {
    const userId = req._id

    const todos = await Todo.find({userId : userId})

    res.json({
        message :"Fetched all todos successfully",
        todos : todos
    })
});

// port listening route
app.listen(PORT, () => {
  console.log(`This app is listening on port ${PORT}`);
});
