"use strict"

function randomNum() {
    return Math.floor(Math.random()*100+1)
}

let cpuOutcome;

let cpuPick = randomNum();
if (cpuPick == 100) {
    randomNum();
} else if (cpuPick >= 67) {
    let cpuOutcome = 3;
} else if (cpuPick >= 34) {
    let cpuOutcome = 2;
} else if (cpuPick >= 1) {
    let cpuOutcome = 1;
} else {
    console.log("bug")
}