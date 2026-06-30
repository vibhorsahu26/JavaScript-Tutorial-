const buttons=document.querySelectorAll('.button');
const h1=document.querySelector('.hone')
const h2=document.querySelector('.htwo')
const body=document.querySelector('body')
buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        if(e.target.id==="grey"){
            body.style.backgroundColor='grey'
            h1.style.backgroundColor='black'
            h2.style.backgroundColor='black'
        }
        if(e.target.id==="white"){
            body.style.backgroundColor='white'
        }
        if(e.target.id==="blue"){
            body.style.backgroundColor='blue'
        }
        if(e.target.id==="yellow"){
            body.style.backgroundColor='yellow'
        }
    })
})