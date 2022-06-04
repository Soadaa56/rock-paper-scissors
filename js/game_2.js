let playerScore = 0;
let computerScore = 0;

//Function to randomly choose 1 symbol for the cpu

function computerPlay() {
    let choices = ['rock', 'paper', 'scissor']
    return choices [Math.floor(Math.random() * choices.length)]
}

// compare computerSelection to playerSelection
function playRound(playerSelection) {
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
                if (playerScore == 3) {
                    result += "You won the game with 3 victory points total!"
                }
              }
    else {
            computerScore += 1;
            result = console.log("You lose! " + playerSelection + " loses to " + computerSelection +
            ". Player score: " + playerScore + "; Computer score: " + computerScore);
            if (computerScore == 3) {
                result += "The computer acquired 3 victory points and took over the world :/"
            }
    }
}
    

const playerSelection = "";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));