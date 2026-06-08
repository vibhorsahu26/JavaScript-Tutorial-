// mostly same as we have studied earlier in c and cpp
let accountname="vibhor" // string 
let number=23455 // number data type ranges from 2 to power 52
// boolean data type= true/false
// null = standalone data type
let accoundid=null
// null is different from undefined 
// undefined means value is not defined yet but null means null value is defined to variable
console.log(typeof accoundid); // type of null is object
let name 
console.log(typeof name); // type of undefined is undefined itself

let s1 = Symbol("id");
let s2 = Symbol("id");

console.log(s1 === s2); // false