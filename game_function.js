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
            case 'paper':
                //win
                break;
            case 'scissor':
                //lose
                break;
            case 'paper':
                //tie
                break;
        }
    } else if (cpuPick === 'paper') {
        switch (userPick) {
            case 'scissor':
                //win
                break;
            case 'rock':
                //lose
                break;
            case 'paper':
                //tie
                break;
        }
    } else if (cpuPick === 'scissor') {
        switch (userPick) {
            case 'rock':
                //win
                break;
            case 'paper':
                //lose
                break;
            case 'scissor':
                //tie
                break;
        }
    } else {
        console.log('playRound logic bug');
    }
}