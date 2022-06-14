"use strict"

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');

let userPick;
let cpuPick;

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
            case 'paper':
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
                win();
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

const userScore = document.querySelector("#score > p:nth-child(1) > span");
const cpuScore = document.querySelector("#score > p:nth-child(2) > span");
let playerScore = 0;
let computerScore = 0;


function win () {
    playerScore++;
    userScore.textContent = playerScore;
}

function lose () {
    computerScore++;
    cpuScore.textContent = computerScore;
}

function tie () {

}