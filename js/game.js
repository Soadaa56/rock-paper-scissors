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
        console.log("cpuRandom.bug")
    }
}

let userPick;
function getUserPick() {
    userPick = prompt("Pick 1 for Rock, 2 for Paper, and 3 for Scissor", "");
    userPick = parseInt(userPick);
}

let userScore = 0;
let cpuScore = 0;
function score() {
    console.log(`You are at ${userScore} points while cpu is at ${cpuScore}`)
}
// First run of functions to get symbols from each player
cpuRandom();
getUserPick();
getOutcome();


//function to run getOutcome() until score of either side is equal 3
do {
    getOutcome() 
}
while (userScore <3 && cpuScore <3);

// if function to see which symbol cpu picked, each with their
// own switch function to make decisions based on userPick.
function getOutcome () {
    if (cpuPick === 1) {
        console.log("Cpu picked Rock");
        switch (userPick) {
            case 1:
                console.log("You picked rock and tied, try again");
                score();
                cpuRandom();
                getUserPick();
                break;
            case 2:
                console.log("You picked paper and won this round");
                win();
                break;
            case 3:
                console.log("You picked scissors and lost to the computer this round :(");
                lose();
                break;
        }
    } else if (cpuPick === 2) {
        console.log("Cpu picked Paper");
        switch (userPick) {
            case 1:
                console.log("You picked rock and lost to the computer this round :(");
                lose();
                break;
            case 2:
                console.log("You picked paper and tied, try again");
                score();
                cpuRandom();
                getUserPick();
                break;
            case 3:
                console.log("You picked scissor and won this round");
                win();
                break;
        }
    } else if (cpuPick === 3) {
        console.log("Cpu picked Scissor");
        switch (userPick) {
            case 1:
                console.log("You picked rock and won this round");
                win();
                break;
            case 2:
                console.log("You picked paper and lost to the computer this round :(");
                lose();
                break;
            case 3:
                console.log("You picked scissor and tied, try again");
                score();
                cpuRandom();
                getUserPick();
                break;
        }
    } else {
        console.log("getOutcome.bug")
    }
}

//Functions to keep score and check if game over, if not reset 
// cpuRandom and get another input from user.
function win() {
    ++userScore;
    if (userScore === 3) {
        gameOverWin();
    } else {
        score();
        cpuRandom();
        getUserPick();
    }
}
function lose() {
    ++cpuScore
    if (cpuScore === 3) {
        gameOverLose();
    } else {
        score();
        cpuRandom();
        getUserPick();
    }
}

//What to do when the game is over at 3 points for either side
function gameOverWin() {
    score();
    console.log("You beat the computer!");
}

function gameOverLose() {
    score();
    console.log("The computer won and took over the world");
}