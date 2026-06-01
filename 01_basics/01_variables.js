const password = 12345 // its value cannot be change once created , if we do so it will give error
let AccountCity = "gurgaon"

// we don't use var as we may face problem in loops or conditional statements
console.log(password) // prints only one line
let accountname // if we have just declared and no value is given it wil behave as undefined
console.table([AccountCity,password,accountname]) // use to print all in one tim