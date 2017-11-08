/*
 *
 * Lección 04: JS Foundations
 * Objetos y comparadores
 *
 */
let obj1 ={obj:"elemento", Object:"element1"};
let obj2 = obj1;
	
var compare = (a, b) => {
 let element1 = Object.getOwnPropertyNames(a);
 let element2 = Object.getOwnPropertyNames(b);

 console.log(element1.length);
 console.log(element2.length);

 if(element1.length != element2.length){
 	return false;
 }

 for(var i=0; i<element1.length; i++){
 	var have = element1[i];

 	if(a[have]!= b[have]){
 		return false;
 	}
 }
 return true;
}

console.log(compare(obj1,obj2));
module.exports = compare;
