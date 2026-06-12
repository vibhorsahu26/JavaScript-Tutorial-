// const user={
//     username:"vibhor",
//     welcomeuser: function greeting(){
//         console.log(`${this.username},Welcome User`);
//         console.log(this);
        
//     }
// }
// //console.log(this); // returns {} as this is not poiting to any object
// console.log(user.welcomeuser());
// user.username="random"
// console.log(user.welcomeuser());

// function greet(){
//     let greeting = "hello vibhor"
//     console.log(this.greeting);
// }
// greet() // prints undefined

// const num = (num1) => (console.log(this.num)) // prints undefined 

// which means we can use this keyword with objects , bcz if we use it in function it will return undefined


// above we have seen how this works, use to point to particular

// now moving to arrow function

// const result = function AddTwoNum(num1,num2){
//     return num1+num2
// }
// console.log(result(3,6)) // output will be 9

// const ans = (num1,num2) => { // if we use curly braces we need to write return 
//     return num1+num2
// } // explicit
// console.log(ans(3,5)); // output will be 8

// const result = (num1,num2) => ( // if we use round braces we do not need to use return 
//     num1+num2
// ) // implicit 
// console.log(result(3,5)); // output will be 8
