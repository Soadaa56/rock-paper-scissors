"use strict"
// variables for button clicks
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
let userPick;
let cpuPick;
// Button to get input and start playRound
rock.addEventListener('click', () => {
    userPick = 'rock';
    getCpuPick();
    playRound();
});
paper.addEventListener('click', () => {
    userPick = 'paper';
    getCpuPick();
    playRound();
});
scissor.addEventListener('click', () => {
    userPick = 'scissor';
    getCpuPick();
    playRound();
});

// function to return 0, 1, or 2
function getCpuPick() {
    let choices = ['rock', 'paper', 'scissor']
    cpuPick = choices[Math.floor(Math.random() * choices.length)]
}

function playRound () {
    if (cpuPick == 'rock') {
        switch (userPick) {
            case 'paper':
                win();
                break;
            case 'scissor':
                lose();
                break;
            case 'rock':
                tie();
                break;
        }
    } else if (cpuPick == 'paper') {
        switch (userPick) {
            case 'scissor':
                win();
                break;
            case 'rock':
                lose();
                break;
            case 'paper':
                tie();
                break;
        }
    } else if (cpuPick == 'scissor') {
        switch (userPick) {
            case 'rock':
                win();
                break;
            case 'paper':
                lose();
                break;
            case 'scissor':
                tie();
                break;
        }
    } else {
        console.log('playRound logic bug');
    }
}
// variables for textContent of outcome and scores
const userScore = document.querySelector("#score > p:nth-child(1) > span");
const cpuScore = document.querySelector("#score > p:nth-child(2) > span");
let playerScore = 0;
let computerScore = 0;
const outcome = document.querySelector('#outcome');
const p = document.createElement('p');
const winner = document.querySelector('.winner');

// Add to scores and show outcome
function win () {
    playerScore++;
    userPick = userPick.charAt(0).toUpperCase() + userPick.slice(1);
    cpuPick = cpuPick.charAt(0).toUpperCase() + cpuPick.slice(1);
    p.textContent = `${userPick} beats ${cpuPick}`;
    outcome.append(p);
    userScore.textContent = playerScore;
    if (playerScore == 5) {
        winner.textContent = 'You were the first to 5 points and won!';
    }
}

function lose () {
    computerScore++;
    userPick = userPick.charAt(0).toUpperCase() + userPick.slice(1);
    cpuPick = cpuPick.charAt(0).toUpperCase() + cpuPick.slice(1);
    p.textContent = `${userPick} loses to ${cpuPick}`;
    outcome.append(p);
    cpuScore.textContent = computerScore;
    if (computerScore == 5) {
        winner.textContent = 'The computer got to 5 points and took over the world :(';
    }
}

function tie () {
    userPick = userPick.charAt(0).toUpperCase() + userPick.slice(1);
    cpuPick = cpuPick.charAt(0).toUpperCase() + cpuPick.slice(1);
    p.textContent = `${userPick} ties to ${cpuPick}`;
    outcome.append(p);
}