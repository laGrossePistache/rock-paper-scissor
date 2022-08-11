
let playerScore = 0;
let computerScore = 0;

const playerScoreElement = document.querySelector("#player-score");
const computerScoreElement = document.querySelector("#computer-score");
const playerChoiceElement = document.querySelector("#player-choice");
const computerChoicelement = document.querySelector("#computer-choice");
const roundWinnerElement = document.querySelector("#round-winner");


document.querySelector('.rock-button').addEventListener("click", ()=> playRound("Rock", getComputerChoice()));
document.querySelector('.paper-button').addEventListener("click", ()=> playRound("Paper", getComputerChoice()));
document.querySelector('.scissors-button').addEventListener("click", ()=> playRound("Scissors", getComputerChoice()));
document.querySelector(".reset-button").addEventListener("click", () => resetGame());



function resetGame(){
    computerScore = 0;
    playerScore = 0;
    roundWinnerElement.textContent = "Still waiting for player's choice";
    playerScoreElement.textContent = `${playerScore}`;
    computerScoreElement.textContent = `${computerScore}`;
}

function getComputerChoice() {
    let number = Math.random() * (2 - 0 + 1) - 0;
    number = Math.floor(number);
    let choice;

    switch (number) {
        case 0:
            choice = 'Rock';
            break;

        case 1:
            choice = 'Paper';
            break;

        case 2:
            choice = 'Scissors';
            break;
    }

    return choice;

}

function playRound(playerSelection, computerSelection){
    playerChoiceElement.textContent = playerSelection;
    computerChoicelement.textContent = computerSelection;
    let finalResult;

    if(playerSelection === computerSelection){
        finalResult = "It's a tie !";
    } else if(playerSelection === "Rock" && computerSelection === "Scissors"){
        finalResult = 'Player has win the round !'
        playerScore++;
    } else if(playerSelection === "Paper" && computerSelection === "Rock"){
        finalResult = 'Player has win the round !'
        playerScore++
    } else if(playerSelection === "Scissors" && computerSelection === "Paper"){
        finalResult = 'Player has win the round !'
        playerScore++;
    } else{
        finalResult = 'Computer has win the round !';
        computerScore++;
    }

    playerScoreElement.textContent = `${playerScore}`;
    computerScoreElement.textContent = `${computerScore}`;
    roundWinnerElement.textContent = finalResult;

}



