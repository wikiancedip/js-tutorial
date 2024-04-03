// primitive Datatypes

// 7 types: String, Number, Boolean, null, undefined, Symbol, bigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id === anotherID);

// const bigNumber = 454684354222222855



// Reference Datatypes

// Array, Objects, Functions 


const heros = ["ironman", "spiderman", "captainAmerica"]

let myObj = {
    name: "debarghya",
    age: 22.
}

const myFunction = function(){
    console.log("Hello World!");
}

console.table(typeof myFunction, myObj)



// Stack memory (for primitive datatypes), Heap memory (for non-primitive datatypes)


let myYoutubeName = "debarghyaGamer"

let anotherName = myYoutubeName
anotherName = "chaiaurcode"

console.log(myYoutubeName);
console.log(anotherName);


let Payel = {
    email : "payel@google.com",
    phoneNumber: 7003264048
}

let Dip = Payel

Dip.email = "debarghya@google.com"

console.log(Payel.email);
console.log(Dip.email);