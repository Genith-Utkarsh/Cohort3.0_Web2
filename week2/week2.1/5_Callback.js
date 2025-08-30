function sum(a, b){
    return a + b
}

function sub(a, b){
    return a - b
}

function multiply(a, b){
    return a * b
}

function divide(a, b){
    if(b === 0){
        return "Operation invalid"
    }
    return a / b
}

function doOperation(a , b, Operation){
    return Operation(a, b)
}

const answer = doOperation(1, 2, sum)
console.log(answer)