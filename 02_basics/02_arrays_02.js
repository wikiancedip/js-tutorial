const marvel_heros = ["spidey", "captainAmerica", "ironman"]
const dc_heros = ["batman", "superman", "flash"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);
// How to access this types of array
console.log(marvel_heros[3][1]);


// Properly adding the arrays

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);


// Using Spread Operator

const allNewHeros = [...marvel_heros, ...dc_heros]
console.log(allNewHeros);

const anotherArray = [1, 2, 3[4, 5, 6], 7[6, 7[4, 5]]]

const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);



console.log(Array.isArray("Debarghya"));
console.log(Array.from("Debarghya"));
console.log(Array.isArray({ name: "Debarghya" }));



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
