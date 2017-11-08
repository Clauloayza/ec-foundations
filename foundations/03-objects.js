/*
 *
 * Lección 04: JS Foundations
 * Objetos preconstruidos
 *
 */

var isNumber = (numberArray) => {
  while(Math.sqrt(numberArray)){
  	if(numberArray % 100){
  		return true;
  	}
  }
  return numberArray < 0;
}

console.log(['-3', '.4', '.', '3+3'].find(isNumber));

module.exports = isNumber;
