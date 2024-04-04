// arrays in JS

const myArray = [0, 1, 2, 3, 4, 5, 6]

console.log(myArray[0]);


const myArr = new Array(1, 2, 3, 4);

console.log(myArr[0]);

// Array method


myArr.push(6)
myArr.pop()

myArr.unshift(0)
myArr.shift()

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArray = myArr.join()
console.log(myArr);
console.log(newArray);
console.log(typeof newArray);



// slice, splice in JS

console.log("A ", myArr);

const myNewArr1 = myArr.slice(1, 3)
console.log("B ", myNewArr1);

const myNewArray2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myNewArray2);