function user(username,score){
    this.username=username
    this.score=score
}

const chai = new user('vibhor',26)

// new keyword is utmost important as it works as a constructor and assign a new instance with a user input data, if we don't use new keyword it will give undefined

// console.log(user);
// console.log(chai);

user.prototype.increment = function(){
    console.log(`New score of user is ${(this.score)+1}`);
    
}
chai.increment() // here we have created a increment method, in which this is used to point to current context

Object.prototype.greet = function(){
    console.log(`Welcome User`);
}
MyArray = [1,2,3,4]
MyArray.greet()

const obj = {
    username:'chai'
}
obj.greet()

user.greet()


// conclusion function,array,string they contain object in it due to which when we form a object prototype it works will all of them
// but if we form prototype of array it will give error with string function and object as array prototype is defined for array only

// using .prototype we can form method of our means depending on working requirement

// Inheritance

const user = {
    username:"vibhor",
    fullTime:true,
    partTime:false
}
const teacher = {
    subject:"js"
}
const teachingAssistant = {
    assignment:"assignment of js"
}
const teachingSupport = {
    isAvailable : false,
    __proto__: teachingAssistant
}
// teacher.__proto__=user (old approach)

Object.setPrototypeOf(teacher,user) // modern approach
