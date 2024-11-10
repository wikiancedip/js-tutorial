// Functions in JavaScript

function sayMyName() {
    console.log("D");
    console.log("E");
    console.log("B");
    console.log("A");
    console.log("R");
    console.log("G");
    console.log("H");
    console.log("Y");
    console.log("A");
}
// sayMyName() //Execution

function addTwoNumbers(number1, number2) {

    console.log(number1 + number2);

}

function addTwoNumbers(number1, number2) {

    // let result = number1 + number2
    // return result
    return number1 + number2


}

const result = addTwoNumbers(1, 4)

// console.log("Result: ", result);


function loginUserMessage(username = "Sayan") {
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage())


function calculateCartPrice(...num) {    // Using of Rest operator //
    return num
}

console.log(calculateCartPrice(200, 300));


// Using object in function

const user = {
    username: "Debarghya",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} or price is ${anyobject.price}`);
}

// console.log(handleObject(user))

console.log(handleObject({    // We also pass the object direct like this
    username: "Priyanka",
    price: 522
}))



// Using array in function

const myNewArray = [100, 200, 300, 400, 500]

function getValueOfArray(getvalue) {
    return getvalue[0]
}

console.log(getValueOfArray(myNewArray));


