function color(){
    let hex='0123456789ABCDEF'
    let color='#'
for(let i=0;i<6;i++){
    color+=hex[parseInt(Math.random()*16)]
}
return color;
}
let start=document.querySelector('.start')
let stop=document.querySelector('.stop')

let target=document.querySelector('body')
let intervalID=null;
start.addEventListener('click',function(){
    if(intervalID===null){
    intervalID=setInterval(function(){
        target.style.backgroundColor=color()
    },100)
}
})
stop.addEventListener('click',function(){
    clearInterval(intervalID);
    intervalID=null

})