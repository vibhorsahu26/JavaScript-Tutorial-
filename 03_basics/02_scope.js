// scopes are of generally two types - global and local scope

// let a=10 
// var b=20
// const c = 30
// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30

// here a, b and c all can be accesed easily as declared globally
// now let's see how these behave in a object
// if(true){
//     let a = 10
//     var b =20
//     const c =30
// }
// // console.log(a); // outside block we cannot print value as let is defined for block only hence, we can access it only in a block (if declared in block) if declared globally then we can access it anywhere
// console.log(b); // we can access value of var inside or outside function, due to which it can raise error . hence, we don't we var in our code as it can raise errors
// console.log(c); // ouside block we cannot access value of variable, same as let 
// only difference between let and const is - in let we can change value also after declaration, and we have not initialise just after declaration but in const just after declaration we have to initialise value also value of const is not change again and again after once initialised

// let num1=10
// var num2=20
// const num3=30
// if(true){
//     num1=100
//     //console.log(num1); // prints 100 as inside block we can access changed value
    
// }
// //console.log(num1); // output will be 10 as let is a block element which means the value we have updated is only updated in that prticular not for whole code

// // same for const but for var - it can be accessible inside or outside block due to which it can raise errors thats why we don't use it

// if(true){
//     num2=100
//     console.log(num2); 
    
// }
// console.log(num2); // hence we can see value of variable inside block changed the value of global scope which means in var we can access var inside or outside of block

// {
//     // declaration of socpe
// }

