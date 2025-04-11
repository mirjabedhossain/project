const playerScoreSpan = document.querySelector(".player-score");
const computerScoreSpan = document.querySelector(".computer-score");
const btnContainer = document.querySelector(".btn-container");
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

const primaryMsg = document.querySelector(".primary-msg");
const finalMsg = document.querySelector(".final-msg");

const resetBtn = document.querySelector(".reset-btn")

let playerScore = 0;
let computerScore = 0;


//  Random selector for computer 

function randomSelect(){
    const options = ["rock","paper","scissors"]
    randomItems = Math.floor(Math.random()* options.length)
    return options[randomItems]
}
function PlayRound(player,computer){
    return (
        (userOption === "rock" && computerOption === "scissors")||
        (userOption === "paper" && computerOption === "rock")||
        (userOption === "scissors" && computerOption === "paper")
    )
}

// making calculated result function
function calculatedResult(userOption){
    const computerOption = randomSelect();

    if(PlayRound(userOption,computerOption)){
        playerScore++
        return `Player Win! ${userOption} beats ${computerOption}`;
    }else if(userOption === computerOption){
        return `It's a tie! Both chose ${userOption}`;
    }else{
        computerScore++;
        return `Computer Win! ${computerOption} beats ${userOption}`;
    }
    
}
// making show result function

function showResult(userOption){
    primaryMsg.innerText = calculatedResult(userOption);
    computerScoreSpan.innerText = computerScore;
    playerScoreSpan.innerText = playerScore;
    if(playerScore === 3 || computerScore === 3){
        finalMsg.innerText = `${playerScore === 3 ? "Player" : " Computer" } has won the game`;
        btnContainer.style.display ="none";
        resetBtn.innerText = "Play again!";
        resetBtn.style.display ="block";
        
    }
    
}

// click event for eyery button

rockBtn.addEventListener('click', function(){
    showResult("rock")
});
paperBtn.addEventListener('click', function(){
    showResult("paper")
});
scissorsBtn.addEventListener('click', function(){
    showResult("scissors")
})

resetBtn.addEventListener('click', function(){
    playerScore = 0;
    computerScore = 0;
    computerScoreSpan.innerText = computerScore;
    playerScoreSpan.innerText = playerScore;
    btnContainer.style.display ="block";
    resetBtn.style.display ="none";
    winnerMsgElement.innerText = '';
    resultMsgElement.innerText ='';

    
})