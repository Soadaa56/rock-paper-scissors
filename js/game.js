"use strict"

function randomNum() {
    return Math.floor(Math.random()*100+1)
}

let cpuOutcome;

let cpuPick = randomNum();
if (cpuPick == 100) {
    randomNum();
} else if (cpuPick >= 67) {
    cpuOutcome = 3;
} else if (cpuPick >= 34) {
    cpuOutcome = 2;
} else if (cpuPick >= 1) {
    cpuOutcome = 1;
} else {
    console.log("bug")
}