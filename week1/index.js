let firstName = "Utkarsh";    // can be update but cant redeclare
const PI = 3.14;    // cant update but cant redeclare
var someThing = 22;          // can be update as well as redeclare


console.log(firstName);
console.log(PI);
console.log(someThing);



let numType = 12   // number
let stringType = "Utkarsh"   // string
let boolType = true           // bool



// array
// zero based indexing => [0, 1, 2.....]
let users = ["Jinwoo", "Shadow", "Aria"]
console.log(users[0])
console.log(users[1])
console.log(users[2])




// function 
function sum(a, b){
    let total = a + b
    return total
}

let result = sum(1, 2);
console.log("Sum of 1 and 2 is = ", result)







// if / else

let userAge = 20;
if(userAge >= 18){
    console.log("You can vote");
} else {
    console.log("You cannot vote")
}



// Objects


let userData = {
    firstName : "Utkarsh",
    middleName : "Krishnat",
    lastName : "Buva",
    age : 21

}

console.log(`User ${userData.firstName}'s age is ${userData.age}`)