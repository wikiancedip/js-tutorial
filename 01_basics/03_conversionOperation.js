let score = "33"

console.log(typeof (score));

let valueInNumber = Number(score)

console.log(typeof valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

// 1 => true; 0 => false
// "" => false 
// "Debarghya" => true

let someNumber = 33

let stringNumber = (String(someNumber))

console.log(stringNumber);
console.log(typeof stringNumber);