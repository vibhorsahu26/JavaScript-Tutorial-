//here we are converting one data type into another data and inspecting its type
let isloggedin = true
console.log(typeof isloggedin);
let numberloggedin = Number(isloggedin)
console.log(numberloggedin);
console.log(typeof numberloggedin);
// true -> 1 ; false->0
let name = "vibhor"
console.log(typeof name);
console.log(name);
let NumName = Number(name)
console.log(typeof NumName);
console.log(NumName);
// string can be converted into number but if we print converted value it will print 
// NaN (not a number)
let AccountNum = 12345
console.log(AccountNum);
console.log(typeof AccountNum);
let stringAccountNum = String(AccountNum)
console.log(stringAccountNum);
console.log(typeof stringAccountNum);
// number can be converted into string and type will be string with output value look same as number but it will be string
let score = null
console.log(typeof score);
console.log(score);
let numScore = Number(score)
console.log(numScore);
console.log(typeof numScore);
// conversion of null into number will convert its type into number and value to 0
let MyMatch = undefined
console.log(MyMatch);
console.log(typeof MyMatch);
let numMyMatch = Number(MyMatch)
console.log(typeof numMyMatch);
console.log(numMyMatch);
//conversion of undefined to number will change its type to number but value will change from undefined to NaN (not a number)





