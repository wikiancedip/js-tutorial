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

// function addTwoNumbers(number1, number2) {

//     console.log(number1 + number2);

// }

function addTwoNumbers(number1, number2) {

    // let result = number1 + number2
    // return result
    return number1 + number2


}

const result = addTwoNumbers(1, 2)

console.log("Result: ", result);


function loginUserMessage(username = "Sayan"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())


