let books =[
    {
        genre:"history",
        publication:1998,
    },
    {
        genre:"sci-fi",
        publication:2000,
    },
    {
        genre:"thrill",
        publication:2007,
    },
    {
        genre:"romantic",
        publication:1970,
    }
]

const bk=books.filter((book)=> {return book.publication>=2000}).filter((book)=> book.genre==="sci-fi")
console.log(bk);
// we can apply filter over filter which allows us to filter in depth and helps to get user desired result



let MyNums = [1,2,3,4,5,6,7,8,9,10]
const n=MyNums.map((num)=> num+10).map((num)=>num*10).filter((num)=>num>150)

console.log(n);
// we can apply more than one map and filter

// concept of reduce = used to find sum

let MyArray= [1,2,3,4,5]
const ans=MyArray.reduce((acc,currval)=>(currval+acc),0) // here ,0 is our initial value which is required for accumulator to start 
// same we can do by forming function
console.log(ans); // prints 15 which is sum of this given array

let shoppingcart=[
    {
        productname:"arhar dal",
        price:200,
        discountedPrice:150
    },
    {
        productname:"masoor dal",
        price:160,
        discountedPrice:120
    },
    {
        productname:"chana dal",
        price:220,
        discountedPrice:180
    }
]

const CartValue=shoppingcart.reduce((acc,currval)=>(acc+currval.price),0)
console.log(CartValue);
