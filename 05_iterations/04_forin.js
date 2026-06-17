// for in loop

// for (const key in object) {
//     if (!Object.hasOwn(object, key)) continue;
    
//     const element = object[key];
    
    
// } syntax of for in loop

// for in is way different loop from for of as in for in it gives keys and for of loop gives value directly

let MyArray = [1,2,3,4,5]

for (const value  in MyArray) {
   //console.log(value); // prints index from 0 to 4 of an array
}
for (const key in MyArray) {
   //console.log(MyArray[key]); // prints value 
}

let MyMap = new Map()
MyMap.set(1,"javascript")
MyMap.set(2,"python")
MyMap.set(3,"c++")

// for (const [key,value] in MyMap) {
//   console.log(key,value);
// }

let MyObj = {
    name : "vibhor",
    email : "v@gmail.com",
    address : "xyz"
}

for (const key in MyObj) {
   console.log(key); // prints keys
}
for (const key in MyObj) {
   console.log(MyObj[key]); // prints values
}

for (const key in MyObj) {
  console.log(`${key} :- ${MyObj[key]}`); // prints both keys and values
}

