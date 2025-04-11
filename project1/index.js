
// start scripting from here

const randomNumber = Math.floor(Math.random() * 100 + 1)

const guesses = document.querySelector(".guesses")
const lastResult = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")

const guessField = document.querySelector('.guess-field')
const  guessBtn = document.querySelector(".guess-btn")

let guessCount = 1;
let resetBtn ;

let box = document.querySelector(".box")




function checkGuess() {
    const userGuess = Number(guessField.value)
    if(guessCount === 1){
        guesses.textContent = "Previous guess:"
    }
    guesses.textContent = `${guesses.textContent} ${userGuess}`;

    if(userGuess === randomNumber){
        lastResult.textContent =  "Congratulations! You got it right!";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent ='';
        setGameOver()
    }else if(guessCount === 10){
        lastResult.textContent ="!!!GAME OVER!!!";
        lastResult.style.backgroundColor = "red";
        lowOrHi.textContent ='';
        setGameOver()

    }else{
        lastResult.textContent = " wrong";
        lastResult.style.backgroundColor = "red";
        lastResult.style.color = "#ffffff";
        if (userGuess < randomNumber) {
            lowOrHi.textContent = "Last guess was too low!";
          } else if (userGuess > randomNumber) {
            lowOrHi.textContent = "Last guess was too high!";
          }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

guessBtn.addEventListener('click', checkGuess)

// create reset button

function setGameOver(){
    guessField.disabled = true;
    guessBtn.disabled = true;
    resetBtn = document.createElement("button")
    resetBtn.textContent = "Start new game"
    resetBtn.style.backgroundColor = "green"
    resetBtn.style.color = "#ffffff"
    box.appendChild(resetBtn)
    resetBtn.addEventListener('click', resetGame)
}

function resetGame() {

    guessCount = 1;
    guesses.textContent ='';
    lastResult.textContent ="";
    resetBtn.parentNode.removeChild(resetBtn);
    guessField.disabled = false;
    guessBtn.disabled = false;
    guessField.value = "";
    guessField.focus();
    const randomNumber = Math.floor(Math.random() * 100 + 1)
}

  