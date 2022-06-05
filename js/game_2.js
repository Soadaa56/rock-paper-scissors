let playerScore = 0;
let computerScore = 0;

//Function to randomly choose 1 symbol for the cpu

function computerPlay() {
    let choices = ['rock', 'paper', 'scissor']
    return choices [Math.floor(Math.random() * choices.length)]
}

// compare computerSelection to playerSelection
function playRound() {
    playerPick();
    let computerSelection = computerPlay();
    let result = ""

    if (playerSelection == computerSelection) {
        result = console.log("A tie! " + playerSelection + " ties with " + computerSelection)
    } 
    
    else if   ((playerSelection == 'rock' && computerSelection == 'scissor') ||
              (playerSelection == 'paper' && computerSelection == 'rock') ||
              (playerSelection == 'scissor' && computerSelection == 'paper')) {
                playerScore += 1;
                result = console.log("You won! " + playerSelection + " beats " + computerSelection +
                ". Player score: " + playerScore + "; Computer score: " + computerScore);
                }
              
    else {
            computerScore += 1;
            result = console.log("You lose! " + playerSelection + " loses to " + computerSelection +
            ". Player score: " + playerScore + "; Computer score: " + computerScore);
            }
}



let playerSelection;
const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

//Function to ask for player input and lowercase the input  
function playerPick() {
    playerSelection = prompt("Pick 'rock', 'paper', or 'scissor'").toLowerCase();
}

// playGame() will check if a player has won and if not, run playRound()
// This function is called with the html btn element "startGame"

function playGame() {
    if (playerScore === 3) {
        console.log("You beat the computer with 3 points!");
    }
   else if (computerScore === 3) {
        console.log("The computer beat you with 3 points");
}   else {
    playRound();
}
}