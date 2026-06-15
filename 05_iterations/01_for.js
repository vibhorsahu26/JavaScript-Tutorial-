// for loop is used when we know the number of iterations

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// } // syntax of for loop

// in for loop we have options to move loop forward or backwward according to our need
// for using for loop number of iteration must be known, otherwise it may lead to infinite loop

let sum = 0
for(let i=0;i<10;i++){ 
    sum=sum+1;
}
console.log(sum); // prints 10
sum=0
for(let i=1;i<=10;i++){ // we will get same result
    sum=sum+1
}
console.log(sum); // prints 10 

for(let i=0;i<10;i++){
    for(let j=0;j<10;j++){
        // block of code
    }
    // block of code
}
// like this we can run loop inside loop
let Mystring="";
let MyArray = [1,2,4,"vibhor","get","on","the","dance","floor"]
for(let i=0;i<MyArray.length;i++){  // we used array.length method here, due to which our loop run till the length of array
    Mystring = Mystring + MyArray[i] + " "
}
console.log(Mystring);

// break = it is used to break the loop
// continue = it is used to skip the iteration
for(let i=0;i<=5;i++){
    if(i===3){
        console.log(`detected ${i}`);
        break
    }
    console.log(`${i}`);
}

for(let i=0;i<=5;i++){
    if(i===3){
        console.log(`detected ${i}`);
        continue
    }
    console.log(`${i}`);
}