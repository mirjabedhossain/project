
function randomSelector(){
    const options = ["rock","paper","scissor"]

    const randomNumber = Math.floor(Math.random() * options.length)
    return options[randomNumber]

    
}

function playRound(player,computer){
    return (
        (player === "rock" && computer === "scissor") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissor" && computer === "paper")

    )
}

let playerScores = 0;
let computerScores = 0;

function getPlayRoundResult(userOption){
    const computerOption = randomSelector()

    if (playRound(userOption, computerOption)) {
        playerScores++;
        return `Player's Win! ${userOption} beat ${computerOption}`
    }else if(userOption === computerOption){
        return `It's a tie! Both chose ${userOption}`;
    }else{
        computerScores++;
        return `Computer wins! ${computerOption} beats ${userOption}`;
    }
}

const playerScoreSpanElement = document.getElementById("player-score")
const computerScoreSpanElement = document.getElementById("computer-score")
const resultMsgElement = document.getElementById("results-msg")
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".chose-options");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResult(userOption){
    resultMsgElement.innerText = getPlayRoundResult(userOption)
    computerScoreSpanElement.innerText = computerScores;
    playerScoreSpanElement.innerText = playerScores;

    if (playerScores === 3 || computerScores === 3) {
        winnerMsgElement.innerText = `${playerScores === 3 ? "Player" : "Computer"} has won the game!`
        resetGameBtn.style.display = "block";
        optionsContainer.style.display = "none";
    } 
    
    
}

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissor-btn");

resetGameBtn.addEventListener('click', function(){
    playerScores = 0;
    computerScores = 0;
    computerScoreSpanElement.innerText = computerScores;
    playerScoreSpanElement.innerText = playerScores;
    optionsContainer.style.display = "block";
    resetGameBtn.style.display = "none";
    winnerMsgElement.innerText = '';
    resultMsgElement.innerText ='';


})

rockBtn.addEventListener('click',function(){
    showResult("rock")
})
paperBtn.addEventListener('click',function(){
    showResult("paper")
})
scissorsBtn.addEventListener('click',function(){
    showResult("scissor")
})
