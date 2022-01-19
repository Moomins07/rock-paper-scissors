
let scoreBoard =  (0)+1
let computerScore =  (0)+1




function computerPlay() {
    const choices = ['r', 'p', 's']
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}


function win() {
console.log ("You win!")
console.log (`Your score: ${scoreBoard++}`)

if (scoreBoard > computerScore) {
    console.log ("Gameover! You beat the PC!")
}
}

function lose() {
console.log ("You lose!")
console.log (`Pc score: ${computerScore++}`)

if (computerScore > scoreBoard) {
    console.log ("Gameover! You lost to the PC!")
}

}

function tie() {
console.log ("Tie!")
}

function playRound() {
    let userPrompt = prompt ("Rock, Paper or Scissors?").toLowerCase();
    const computerChoice = computerPlay();
    switch (userPrompt + computerChoice) {
    case "rocks":
    case "paperr":
    case "stonep":
        win();
        break; 
    case "stoner":
    case "rockp":
    case "papers":
        lose();
        break;
    case "rockr":
    case "paperp":
    case "stones":
        tie();
        break;
    default: return ("I don't know that!");
    }

}

function game() {
    playRound()
    playRound()
    playRound()
    playRound()
    playRound()
}

