// while loop is used when the iteration is not given , in this we play with condition
// till the condition is true loop runs
// in while loop we use increment, decrement or any termination condition due to which program gets terminated, otherwise it will led to infinite loop

// while (condition) {
//     // block of code
// }
// syntax of while loop

let MyArray = [1,3,4,5,"vibhor"]
let length = MyArray.length
let i = 0
while(i!=length){
    console.log(MyArray[i]);
    i=i+1
}

// do while loop

// do {
    // block of code
// } while (condition);
// syntax of do-while

let val=1
do{
    console.log("its 1");
} while(val>10); // as we know condition is false
// in do- while loop, block runs for very first time always, after that it checks condition of while , if its true block runs otherwise not
