const clock=document.querySelector('.clock')
const tarik=document.querySelector('.date')

setInterval(function(){
    const date=new Date()
    clock.innerHTML=date.toLocaleTimeString()
    tarik.innerHTML=date.toLocaleDateString()

},1000)
// only we have to remember about setInterval function