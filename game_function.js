"use strict"

let playerScore = 0;
let computerScore = 0;
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');

rock.addEventListener('click', userPick);
paper.addEventListener('click', userPick);
scissor.addEventListener('click', userPick);

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