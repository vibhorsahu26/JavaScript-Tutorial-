// for of loop 

// for (const element of object) {
    
// } syntax of for of loop
// object does not mean object, it means on what we have to apply loop
// element in for of loop is iterator, also we can change the name of iterator as well


let MyArray = [2,3,4,5,6]
for (const value of MyArray) {
    //console.log(value);
}

let MyMap = new Map()
MyMap.set(1,"javascript")
MyMap.set(2,"python")
MyMap.set(3,"c++")

for (const key of MyMap) {
   // console.log(key); // throws array
}
for(const [key,value] of MyMap){
    //console.log(key,":-",value); // prints key value pairs
}

let MyObj = {
    name : "vibhor",
    email : "v@gmail.com",
    address : "xyz"
}

for (const key of MyObj) {
    console.log(key); // it will not run, as object is not iterable due to which we cannot apply for of loop on object
}


