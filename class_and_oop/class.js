// const user={
//     username:"vibhor",
//     isloggedIn:true,
//     LoginID:146646,
//     getuser: function(){
//         console.log(this); // prints details to its current context
        
//     }
// }
// // console.log(user);
// // console.log(user.isloggedIn);

// user.getuser()


// console.log(this); // gives blank object as there is no current context of this
// // if in browser we do console log this, it gives window as output as window is current context of this





// function user(username,isLoggedIn,LoginID){
//     this.username=username;
//     this.isLoggedIn=isLoggedIn;
//     this.LoginID=LoginID;
//     // here we can write a method/function also 
// }

// let userOne =new user('Vibhor',true,14566);
// // console.log(userOne);
// let userTwo = new user('random',false,13246);
// // console.log(userTwo);

// we need to use new keyword everytime to form a new instance, otherwise it may lead to data over write and we may loose data


// class user{
//     constructor(username,password,LoginID){
//         this.username=username
//         this.password=password
//         this.LoginID=LoginID
//     }
//     greet(){
//         console.log(`welcome ${this.username}`); // here we need to write this to give the current context, otherwise it will give not defined error
        
//     }
// }
// const teacher = new user('random',123,'o4f5e') // we need to use new keyword everytime to form a new instance
// // teacher.greet()
// // console.log(teacher);

// class student extends user{ // here using extend we have used the property of user in our new class
//     constructor(username,course){
//         super(username)
//         this.course=course
//     }
//     logMe(){
//         console.log(`${this.username} logged in`);
        
//     }
//     static tellCourse(){
//         console.log(`${this.username} has selected ${this.course} for their higher education`);
        
//     }
// }

// const student1 = new student('vibhor','btech-cse')
// console.log(student1);

// student1.tellCourse()  // now as i have used static keyword which does not let use tellcourse function outside its class declaration 
// student1.logMe()

const user = {
    username:"vibhor"
}
function greet(){
    console.log(`${this.username} logged in`);
    
}
console.log(user);
greet.call(user) // call keyword is used to explicitally call the function, but we don't need to do so in class

