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
