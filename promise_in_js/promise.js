// const promiseOne = new Promise(function(resolve,reject){
//     // do any async task
//     // set time interval , set timeout
//     // database call, network, cryptography
//     setTimeout(function(){
//         console.log('async task is complete');
//         resolve() // we need to wirte this so that our promise gets consumed
//     },1000)
// })
// // then is directly related to resolve
// promiseOne.then(function(){
//     console.log('promise consumed');
    
// })
// output without using resolve
// async task is complete


// output when using resolve()
// async task is complete
// promise consumed


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('async task is completed');
//         resolve()
//     },1000)
// }).then(function(){
//     console.log('promise consumed');
    
// })

// these both two above code works same

// const promiseThree = new Promise(function(resolve,reject){
    // setTimeout(function(){

        //     console.log('async task is completed');
        //     resolve({username : "vibhor", password : 12345})
        // })
        // promiseThree.then(function(user){
            //     console.log(user);
            //     return user.username
            // }).then(function(username){
                //     console.log(username);
                // })
                
            // },1000)
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){

        let error = true
        if(!error){
            console.log('async task completed');
            resolve({username : "vibhor", password : 12345})
            
        }
        else{
            reject('something went wrong')
        }
    })
    },1000)

promiseFour.then(function(user){
    console.log(user);
    
}).catch(function(error){
    console.log(error);
    
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){

        let error = true
        if(!error){
            console.log('async task completed');
            resolve({username : "vibhor", password : 12345})
            
        }
        else{
            reject('something went wrong')
        }
    })
    },1000)

// promiseFive.then(function(user){
//     console.log(user);
    
// }).catch(function(error){
//     console.log(error);
    
// }).finally(function(){
//     console.log('finally promise is consumed with or without error');
    
// })

// async await 

async function consumedPromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}
consumedPromiseFive() 
