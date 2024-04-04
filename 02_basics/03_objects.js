// singleton 
// object.create()

// object literals

const mySym = Symbol("key1")


const jsUser = {
    name: "Debarghya",
    "full name": "Debarghya Das",
    [mySym]: "mykey1",
    age: 18,
    location: "kolkata",
    email: "debarghya@gmail.com",
    isLoggedIn: false,
    lastLoginDays: []
}

console.log(jsUser.email);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

jsUser.email = "debarghya@yaahoo.com"
// Object.freeze(jsUser)
jsUser.email = "debarghya@chatgpt.com"
console.log(jsUser);


jsUser.greetings = function () {
    console.log("Hello js user");
}

jsUser.greetingsTwo = function () {
    console.log(`Hello js user ${this.name}`);
}

console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo());

