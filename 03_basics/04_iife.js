// iife - immediate invoked function expression

// used to remove pollution caused by global variables by invoking function just after its calling

// function Greet(){
//     console.log(`hello user`);
    
// }
// Greet()
// // a normal function 


(function Greet(){
    console.log(`hello user`);
    
})(); // iife - which will help to invoke function just after calling

//(); // this is used for calling function, in which in this parenthesis we can also enter value
// ; semicolon is needed to end line, otherwise in multiple function it will lead to raise error

// same we can do with arrow functions 

(
    (name) => (
        console.log(`hello ${name}`)
    )
)("vibhor"); // also an example of iife in which we are passing argument to our arrow function

// named iife can be said when we write function using function keyword
// unnamed iife can be said when we write arrow function