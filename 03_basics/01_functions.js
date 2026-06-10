// functions in js 
function SayMyName(){
    console.log("Vibhor");
    
}
//SayMyName // till this it is reference
SayMyName() // now it will get executed
// now we can reuse this saymyname function n times to print names , which helps in reusability and enhances readability of code
function AddTwoNumber(num1,num2){
    return num1+num2; // returns a value which we can print or store it in another variable
}
let result = AddTwoNumber(3,5)
console.log(result);

function SubTwoNum(num1,num2){
    console.log(`Subtraction of ${num1} and ${num2} is ${num1-num2} `);
}
SubTwoNum(3,2)
// we can also use if else to check data type, so that user get desired result
// function in objects

let MyObj={
    name :"vibhor",
    age : 18,
    email:"v@gmail.com"
}
function DetailsofObj(anyObj){
    console.log(anyObj);   
}
DetailsofObj(MyObj)
// like this we can make changes, print only desired key values, perform methods and many more..

// function in arrays

const MyArray=[1,2,3,4,5]
function DetailOfArray(AnyArray){
    console.log(AnyArray);
}
DetailOfArray(MyArray)
// similarly we can perform methods, change values, print values and many more
