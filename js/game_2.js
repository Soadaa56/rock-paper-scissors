//Function to randomly choose 1 symbol for the cpu

function computerPlay() {
    let choices = ['rock', 'paper', 'scissor']
    return choices [Math.floor(Math.random() * choices.length)]
}