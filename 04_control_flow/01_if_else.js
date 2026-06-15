// if statement runs if the given condtion is true
// else statement runs if the given if condition does not get executed
// else if statement runs if if statement is false, and if else statement is true

let IceTeaPrice = 90
if(IceTeaPrice <= 70){
    console.log(`Price of IceTea is below 70rs`);
}
else if(IceTeaPrice >70 && IceTeaPrice <99){
    console.log(`Price of IceTea is between 70rs and 99rs`);
}
else{
    console.log(`Price of IceTea is 100rs`);
}

// operators which we can use for control flow of code 
// <=, >= , == , === , != , >, < ,&& , || , ?? ,?
// == comapres only value not datatype
// === compares both value and datatype

let value = "10"
if(value==10){
    console.log("value is 10 of integer"); // if block runs although we know that value of 10 is string not integer value, which equality operator cannot check
}
else{
    console.log("value is not 10 of string");
    
}

if(value===10){
    console.log("value is 10 of integer"); // if block does not get executed as we have uesd === operator which checks value and datatype both 
}
else{
    console.log("value is 10 of string");
    
}

// falsy condition by default = 0, -0, bigint 0n, false, ""
// truthy condition by default = [] , " ", {}, 1, true, function(){}

// now if object and array is empty it will return true which can make error if we are looking for emptyness
let array= []
if(array){
    console.log("array is not empty");
}
else{
    console.log("array is empty");
}
// to overcome this problem we use .length method
if(array.length==0){
    console.log("array is empty");
}
else{
    console.log("array is not empty");
    
}
let obj= {}

if(obj){
    console.log("object is not empty");
}
else{
    console.log("object is empty");
}
// to overcome this issue we use Object.key then find its length
if(Object.keys(obj).length==0){
    console.log("object is empty"); 
}
else{
    console.log("object is not empty");
}

const name =""
if(name){
    console.log("true");
}
else{
    console.log("false");
}

