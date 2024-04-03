const name = "debarghya"
const repoCount = 50

// console.log(name + repoCount + "Value"); // old technique

console.log(`Hello my name is ${name} and my git repo counts is ${repoCount}`);

const gameName = new String("debarghya-gamer")

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('e'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(0, 4)
console.log(anotherString);

const newStringOne = "      debarghya      "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://debarghya.com/deb%20das"

console.log(url.replace('%20', '-'));

console.log(url.includes('priyanka'));

console.log(gameName.split('-'));