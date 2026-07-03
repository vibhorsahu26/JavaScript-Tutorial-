const random = parseInt(Math.random()*100+1)
console.log(random);

const form = document.querySelector('.form')
const displayMessage = document.querySelector('.message')
const previousguess = document.querySelector('.previousGuess')
const remainingGuess = document.querySelector('.remaining')
const submit = document.querySelector('#submit')
const newGame = document.querySelector('.new')
const guessInput = document.querySelector("#guess");
let numGuess=1
const previousGuesses = [];
form.addEventListener('submit',function(e){
    e.preventDefault()
    const guess=parseInt(document.querySelector('#guess').value);
    const button = document.querySelector('#submit')
    if(guess < 1 || guess > 100 || isNaN(guess)){
        displayMessage.innerHTML=`Wrong Input`
    }
    previousGuesses.push(guess)
    previousguess.innerHTML=`${previousGuesses.join(",")}`
    if(guess===random){
        displayMessage.innerHTML=`You guessed it right !`
        submit.disabled = true;
        document.querySelector('#guess').disabled = true;
        guessInput.value=""
        start()
        return;
    }
    else{
        loworHi(guess)
        guessInput.value=""
        numGuess++
        remaining(numGuess)
    }
})
function loworHi(guess){
    if(guess < random){
        displayMessage.innerHTML=`guessed too low`
    }
    else if(guess > random){
        displayMessage.innerHTML=`guessed too high`
    }
}
function remaining(numGuess){
    if(numGuess==11){
        displayMessage.innerHTML=`Chances over`
        submit.disabled = true;
        document.querySelector('#guess').disabled = true;
        start()
    }
    else{
        remainingGuess.innerHTML=10-numGuess+1
    }
}
function start(){
if(submit.disabled){
newGame.addEventListener('click', function(e){
    e.preventDefault()
    remainingGuess.innerHTML=10
    submit.disabled = false;
    document.querySelector('#guess').disabled = false;
    previousGuesses.length=0
    displayMessage.innerHTML=`give it a fresh start`
})
}
}
