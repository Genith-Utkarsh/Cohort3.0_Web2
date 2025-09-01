function setTimeoutPromisified(duartion){
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duartion)
    })
}

async function solve(){
    await setTimeoutPromisified(1000)
    console.log("Hi")
    await setTimeoutPromisified(3000)
    console.log("Hi there")
    await setTimeoutPromisified(5000)
    console.log("Hi there how")
}
solve()