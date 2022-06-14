"use strict"

let playerScore = 0;
let computerScore = 0;
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');

let userPick;
rock.addEventListener('click', () => {
    userPick = 'rock';
    console.log(userPick);
});
paper.addEventListener('click', () => {
    userPick = 'paper';
    console.log(userPick);
});
scissor.addEventListener('click', () => {
    userPick = 'scissor';
    console.log(userPick);
});

function cpuPick() {
    let choices = ['rock', 'paper', 'scissor']
    return choices [Math.floor(Math.random() * choices.length)]
}

function playRound () {
    if (cpuPick === 'rock') {
        switch (userpick) {
            case 1:
                //win
            case 2:
                //lose
            case 3:
                //tie
        }
    } else if (cpuPick === 'paper') {
        switch (userPick) {
            case 1:
                //win
            case 2:
                //lose
            case 3:
                //tie
        }
    } else if (cpuPick === 'scissor') {
        switch (userPick) {
            case 1:
                //win
            case 2:
                //lose
            case 3:
                //tie
        }
    } else {
        console.log('playRound logic bug');
    }
}