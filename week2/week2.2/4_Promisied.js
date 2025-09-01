function setTimeoutPromisified(time) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time)
    } )
}


function someFunction(){
    console.log("Call me after the setTimeoutPromisified function is done")
}

const p = setTimeoutPromisified(5000).then(someFunction)   // returns objects of Promise
console.log(p)