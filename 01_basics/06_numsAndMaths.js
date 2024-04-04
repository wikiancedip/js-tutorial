const score = 400

console.log(score);

const balence = new Number(100)

console.log(balence);

console.log(balence.toString().length);
console.log(balence.toFixed(1));


const otherNumber = 123.5566

console.log(otherNumber.toPrecision(3));


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


// ***************** Maths ************ //

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.6));
console.log(Math.min(4, 6, 8, 9));
console.log(Math.max(4, 6, 8, 9));

console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);


const min = 10
const max = 20

console.log(Math.floor((Math.random() * (min - max)) + 1) + min);