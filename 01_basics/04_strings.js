// string is a primitive datatype which means if we make changes in strings it will 
// not make changes to original strings , also we have a copy of variable
//  not the actual refernce of variable
let MyName="vibhor"
console.log(MyName);// prints name
console.log(MyName.length);// gives length of string
console.log(MyName.slice(0,4));// prints first four character of given string
console.log(MyName.slice(4,6));// in slice no matter what is our start parameter it always take as 0  (in case of negative)
console.log(MyName.indexOf("z"));// gives index of character of a given string, if char is not present output will be -1
console.log(MyName.charAt(2)); // prints value of char at that particular index of particular string
console.log(`Hello my name is ${MyName}, I am learning javascript`); // use to concat string while continuing current line





