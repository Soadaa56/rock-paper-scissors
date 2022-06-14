"use strict"

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');

let userPick;
rock.addEventListener('click', () => {
    userPick = 'rock';
    cpuPick();
    playRound();
});
paper.addEventListener('click', () => {
    userPick = 'paper';
    cpuPick();
    playRound();
});
scissor.addEventListener('click', () => {
    userPick = 'scissor';
    cpuPick();
    playRound();
});

function cpuPick() {
    let choices = ['rock', 'paper', 'scissor']
    return choices [Math.floor(Math.random() * choices.length)]
}

function playRound () {
    if (cpuPick === 'rock') {
        switch (userpick) {
            case 'paper':
                win();
                break;
            case 'scissor':
                lose();
                break;
            case 'paper':
                tie();
                break;
        }
    } else if (cpuPick === 'paper') {
        switch (userPick) {
            case 'scissor':
                win();
                break;
            case 'rock':
                lose();
                break;
            case 'paper':
                win();
                break;
        }
    } else if (cpuPick === 'scissor') {
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

const userScore = document.querySelector("#score > p.userScore");
const cpuScore = document.querySelector("#score > p.cpuScore");
let playerScore = 0;
let computerScore = 0;


function win () {
    playerScore++;
    userScore.textContent += playerScore;
}

function lose () {
    computerScore++;
    cpuScore.textContent += computerScore;
}

function tie () {

}