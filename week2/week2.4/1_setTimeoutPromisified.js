function setTimeoutPromisified(duartion) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, duartion * 1000)
    })
}



setTimeoutPromisified(2)
.then(function (){
    console.log("I am called , that means everything is done perfectly..")
})