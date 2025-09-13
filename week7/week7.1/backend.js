const express = require("express");
const app = express();
const { UserModel, TodoModel } = require("./db.js");

//initialisation
const PORT = 3000;

//MiddleWares
const auth = async (req, res, next) => {};

//routes

app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  // check if user in database or not


  // if not
  const newUser =  await UserModel.create({
        email,
        username,
        password
  })

  if(!newUser){
    return res.status(500).json({
        message : "Unable Sign Up"
    })
  }

  res.status(200).json({
    message : "Signup successfully"
  })
});

app.post("/signin", (req, res) => {});

// authenticated routes

app.post("/todo", auth, (req, res) => {});

app.get("/todos", auth, (req, res) => {});

// port listening route
app.listen(PORT, () => {
  console.log(`This app is listening on port {PORT}`);
});
