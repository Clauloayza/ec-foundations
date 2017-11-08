/*
 *
 * Lección 04: JS Foundations
 * Invertir Arreglo
 *
 */

var invert = array => {
	var matriz = [];
	for (var i = array.length -1; i>= 0; i--){
		matriz += array[i];
	}
	return matriz;

 	console.log("matriz");
};

console.log(invert([1,2,3,4]));
module.exports = invert;
