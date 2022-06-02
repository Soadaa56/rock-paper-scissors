"use strict"

function randomNum() {
    return Math.floor(Math.random()*100+1)
}
let cpuPick;

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

function getOutcome () {
    if (cpuPick === 1) {
        switch (userPick) {
            case 1:
                console.log("You tied, try again");
                cpuRandom();
                getUserPick();
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
        switch (userPick) {
            case 1:
                console.log("The computer wins this round :(");
                cpuRandom();
                getUserPick();
                break;
            case 2:
                console.log("You tied, try again");
                cpuRandom();
                getUserPick();
                break;
            case 3:
                console.log("You won this round");
                cpuRandom();
                getUserPick();
                break;
        }
    } else if (cpuPick === 3) {
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
                cpuRandom();
                getUserPick();
                break;
        }
    } else {
        console.log("bug")
    }
}

cpuRandom();
getUserPick();
