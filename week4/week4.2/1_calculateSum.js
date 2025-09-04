import express from "express"
const app  =  express()

const PORT = 3000;

function totalSum(num){
    return ( num * (num + 1) / 2)
}

app.get("/sum", (req, res) => {
    const num = Number(req.query.num)

    res.json({
        number : num,
        result :  totalSum(num)
    })
})

app.listen(PORT, function(){
    console.log(`This app is listening on port ${PORT}`)
})