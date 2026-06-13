let radamno= parseInt(Math.random()*100+1);
const submit= document.querySelector('#subt')
const userInput=document.querySelector('#guessfiled')
const guesseslot=document.querySelector('.guesses')
const lastResult=document.querySelector('.lastResult')
const Lowhigh=document.querySelector('.loworhi')
const StartOver=document.querySelector('.resultparas')

const p=document.createElement('p')
let preGuess=[]
let numGuess=1
let playGame=true;
if (playGame) {
   submit.addEventListener('click',function (e) {
    e.preventDefault()
    const guess=parseInt(userInput.value)
    // console.log(guess);
    
    validateguess(guess)
   }) 
}
function validateguess(guess) {
    if (isNaN(guess)) {
      alert('Please Enter vaiid Number')  
    }
    else if (guess<1) {
          alert('Please Enter vaiid Number') 
    }
    else if (guess>100) {
          alert('Please Enter a number less then 100 ') 
    }
    else{
        preGuess.push(guess)
            if (numGuess===11) {
                displayguess(guess)
            DisplayMessage(`Game Over. Random number was ${random}`)
            EndGame()
            
        }
        else{
            displayguess(guess)
            CheckGuess(guess)
        }
    }
}
function CheckGuess(guess) {
    if (guess===radamno) {
        DisplayMessage('You guessed it right')
        EndGame()
    }else if (guess< radamno) {
        DisplayMessage('Number is tooo low')
    }
    else if (guess>radamno) {
        DisplayMessage('Number is tooo high')
    }
}
function displayguess(guess) {
    userInput.value=''
    guesseslot.innerHTML +=`${guess},`
    numGuess++;
    lastResult.innerHTML=`${11- numGuess}`
}

function DisplayMessage(message) {
    Lowhigh.innerHTML=`<h2>${message}</h2>`
}
function EndGame() {
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start new game</h2>`
    StartOver.appendChild(p)
    playGame=false
    NewGame()
}

function NewGame() {
  const newGuestButton=  document.querySelector('#newGame')
  newGuestButton.addEventListener('click',function (e) {
    radamno=parseInt(Math.random()*100+1);
    preGuess=[]
    numGuess=1
    guesseslot.innerHTML=''
    lastResult.innerHTML=''
    userInput.removeAttribute('disabled')
    StartOver.removeChild(p)
    playGame=true

  })
}
// console.log(radamno);
