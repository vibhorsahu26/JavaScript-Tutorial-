const user={
    username:"vibhor",
    isloggedIn:true,
    LoginID:146646,
    getuser: function(){
        console.log(this); // prints details to its current context
        
    }
}
// console.log(user);
// console.log(user.isloggedIn);

user.getuser()


console.log(this); // gives blank object as there is no current context of this
// if in browser we do console log this, it gives window as output as window is current context of this





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