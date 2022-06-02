"use strict"

function randomNum() {
    return Math.floor(Math.random()*100+1)
}

let cpuPick;
// My work around to get the cpu to pick a number 1, 2 or 3.
function cpuRandom() {
    cpuPick = randomNum();
    if (cpuPick == 100) {
        randomNum();
    } else if (cpuPick >= 67) {
        cpuPick = 3;
    } else if (cpuPick >= 34) {
        cpuPick = 2;
    } else if (cpuPick >= 1) {
        cpuPick = 1;
    } else {
        console.log("bug")
    }
}

let userPick;
function getUserPick() {
    userPick = prompt("Pick 1 for Rock, 2 for Paper, and 3 for Scissor", "");
    userPick = parseInt(userPick);
}

let userScore = 0;
let cpuScore = 0;
let score = `You are at ${userScore} points while cpu is at ${cpuScore}`

// First run of functions to get symbols from each player
cpuRandom();
getUserPick();
getOutcome();

// if function to see which symbol cpu picked, each with their
// own switch function to make decisions based on userPick.
function getOutcome () {
    if (cpuPick === 1) {
        console.log("Cpu picked Rock");
        switch (userPick) {
            case 1:
                console.log("You tied, try again");
                console.log(score);
                cpuRandom();
                getUserPick();
                getOutcome();
                break;
            case 2:
                console.log("You won this round");
                cpuRandom();
                getUserPick();
                break;
            case 3:
                console.log("The computer wins this round :(");
                cpuRandom();
                getUserPick();
                break;
        }
    } else if (cpuPick === 2) {
        console.log("Cpu picked Paper");
        switch (userPick) {
            case 1:
                console.log("The computer wins this round :(");
                cpuRandom();
                getUserPick();
                break;
            case 2:
                console.log("You tied, try again");
                console.log(score);
                cpuRandom();
                getUserPick();
                getOutcome();
                break;
            case 3:
                console.log("You won this round");
                cpuRandom();
                getUserPick();
                break;
        }
    } else if (cpuPick === 3) {
        console.log("Cpu picked Scissor");
        switch (userPick) {
            case 1:
                console.log("You won this round");
                cpuRandom();
                getUserPick();
                break;
            case 2:
                console.log("The computer wins this round :(");
                cpuRandom();
                getUserPick();
                break;
            case 3:
                console.log("You tied, try again");
                console.log(score);
                cpuRandom();
                getUserPick();
                getOutcome();
                break;
        }
    } else {
        console.log("bug")
    }
}

//Functions to keep score
function win() {

}

function lose() {

}