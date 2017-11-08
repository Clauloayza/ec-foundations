/*
 *
 * Lección 04: JS Foundations
 * Control Flow
 *
 */

var powerOfTwo = number => {
 var base = 2;

 for (let i=1; i<number; i++){
 	base = base * 2;
 	console.log(base);
 }
 console.log(base);
 return base;
};

console.log(Math.pow(2,10));

console.log(powerOfTwo(10));
module.exports = powerOfTwo;
