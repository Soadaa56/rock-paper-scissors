"use strict"

let playerScore = 0;
let computerScore = 0;

function cpuPick() {
    let choices = ['rock', 'paper', 'scissor']
    return choices [Math.floor(Math.random() * choices.length)]
}

function userPick() {
    const rock = document.querySelector('.rock');
    const paper = document.querySelector('.paper');
    const scissor = document.querySelector('.scissor');
    
    
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