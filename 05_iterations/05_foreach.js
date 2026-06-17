// for each
// in this we form a function of anything which we want to perform 
// function can be a normal named function or arrow function

let MyArray = [1,2,3,4,5]
// MyArray.forEach( function printme(MyArray) {
//     console.log(MyArray);
// })

MyArray.forEach((item)=>{ // here we have created a arrow function
    console.log(item); 
})

function print(anyarray){
    console.log(anyarray);
    
}
MyArray.forEach(print) // using this way we can also use for each

MyArray.forEach((item,index)=>{
    console.log(item , index); // pritnts value and its index
    
})

const info = [
    {
        name:"vibhor",
        email:"v@gmail.com"
    },
    {
        name:"random",
        email:"r@gmail.com"
    },
    {
        name:"person",
        email:"p@gmail.com"
    }
]

info.forEach((item)=>{
    console.log(item.name);
})