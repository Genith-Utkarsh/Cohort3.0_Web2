const mongoose = require("mongoose")


mongoose.connect("mongodb+srv://buvautkarsh849:QFBS5zJawmBh2NlB@cluster0.g427upx.mongodb.net/todoApp")
.then(()=>{
    console.log("Database connected successfully")
})
.catch((err) => console.log(`Error connecting to database : ${err}`))

// creating a Schema
const userSchema = new mongoose.Schema({
    email : {
        type : String,
        unique : true
    },
    username : String,
    password : String,
})

const todoSchema = new  mongoose.Schema({
    userId : {type : mongoose.Schema.Types.ObjectId, ref : "users"},
    title : String,
    description : String,
    isDone : Boolean,
})


// create Model

const User = mongoose.model("Users", userSchema)
const Todo = mongoose.model("Todos", todoSchema)


// export model

module.exports = {
    User,
    Todo
}