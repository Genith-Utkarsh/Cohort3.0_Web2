import express from "express"
const app  =  express()

const PORT = 3000;

function totalSum(num){
    return ( num * (num + 1) / 2)
}

function add(a, b){
    return a + b
}

app.get("/sum", (req, res) => {
    const num = Number(req.query.num)

    res.json({
        number : num,
        result :  totalSum(num)
    })
})


app.get("/add", (req, res)=> {
    const a = Number(req.query.a)
    const b = Number(req.query.b)

    const result = add(a, b)

    res.status(200).json({
        message : `Result of adding ${a} and ${b} is ${result}`
    })

})

app.listen(PORT, function(){
    console.log(`This app is listening on port ${PORT}`)
})