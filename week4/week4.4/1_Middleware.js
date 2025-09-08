const express = require("express")
const app = express()


function isOldEnoughMiddlewre(req, res, next){
    const age = Number(req.query.age)
    if(age >= 18){
        return next()
    }

    // else
    res.status(400).json({
        msg : "You are not eligible for this ride"
    })
}


app.get("/ride", isOldEnoughMiddlewre, function(req, res){
    res.status(200).json({
        msg : "You can successfully ride .."
    })
})

app.listen(3000)