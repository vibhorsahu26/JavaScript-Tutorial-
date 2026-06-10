let newobj= new Object() 
let obj={}
// standalone object
console.log(typeof obj);
// output object

let user={
    name : "vibhor",
    age : 18,
    email : "vib@gmail.com",
    IsLoggedIn : false,
}
console.log(user);
// { name: 'vibhor', age: 18, email: 'vib@gmail.com', IsLoggedIn: false }
console.log(user["IsLoggedIn"]); // false
console.log(user.IsLoggedIn); // false
//console.log(user[IsLoggedIn]); // wrong method as key in object are string so we can access them using ""

console.log(Object.keys(user)); // gives keys of our object
console.log(Object.values(user)); // gives values of our object
console.log(Object.entries(user)); // return key values pairs

// changing key values adding more keys to object
user["email"]="hello@gmail.com"
console.log(user.email); //or console.log(user["email"]);
user["phone_number"]=999332201 // adding new key value pair to object
console.log(user["phone_number"]);
console.log(user.hasOwnProperty('IsLoggedIn')); // true that means this property exists in user

let MySym = Symbol("id")
console.log(typeof MySym); // symbol

let user1 ={
    [MySym] : 101,
    name:"vib"
}
console.log(user1);
console.log(typeof user.MySym); // umdefined

// we can also freeze object so that value inside that cannot get changed, but after doing that we cannot make change in key values of object
Object.freeze(user)
user["name"]="random"
console.log(user.name); // hence we can see i have changed name to random but print name output we observe there is same output as before , hence ou object is in freeze condition
// to check whether the object is freezed or not we can perform a method given below
console.log(Object.isFrozen(user)); // returns true as out object is freezen

// creating objects in an array
let array=new Array(user2={
    name:"vib"
})

console.log(typeof array); // arrays are special type of objects, that's why output is object
console.log(Array.isArray(array)); // returns true hence it is array
console.log(array[0]); // prints user2
console.log(array[0].name); // prnits name of user2

let obj1={
    1:"a",
    2:"b"
}
let  obj2={
    3:"c",
    4:"d"
}
// now concatinating obj1 and obj2 to obj3
let obj3={...obj1,...obj2}
console.log(obj3);
// { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// object destruction
let MyObj={
    name:"random",
    age:20,
    email:"random@gmail.com"
}
let {name:myname} = MyObj
console.log(myname); // prints random
