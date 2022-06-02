"use strict"

function randomNum() {
    return Math.floor(Math.random()*100+1)
}

let cpuPick = randomNum();
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

