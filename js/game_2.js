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
                if (playerScore == 3) {
                    result += "You won the game with 3 victory points total!";
                    gameOver();
                }
              }
    else {
            computerScore += 1;
            result = console.log("You lose! " + playerSelection + " loses to " + computerSelection +
            ". Player score: " + playerScore + "; Computer score: " + computerScore);
            if (computerScore == 3) {
                result += "The computer acquired 3 victory points and took over the world :/";
                gameOver();
            }
    }
}
    

let playerSelection;
const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

//Function to ask for player input and lowercase the input  
function playerPick() {
    playerSelection = prompt("Pick 'rock', 'paper', or 'scissor'").toLowerCase();
}

// game() will call playRound() function until a winner is declared. The playRound() should end the function when either player receives 
// 3 points. "The Odin Project" is asking for a game() function to use a loop to count rounds. A loop would work if I only wanted a certain 
// amount of rounds to play out, but I don't want a tie to occur. Is there a way for the loop add to both the round count but also rounds 
// needed to end the loop so that a tie doesn't occur and only ends once a player is up to 3 points? 

// In the mean time, game() will be tied to a button on the webpage to call playerRound() and continue until gameOver() is called.

document.getElementById("startGame").onclick = console.log("test") & console.log("test:");

    