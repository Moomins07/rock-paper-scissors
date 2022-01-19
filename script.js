
let userScore =  0
let computerScore =  0

function userWin() {
    userScore++
}

function userLose() {
    computerScore++
}

function computerPlay() {
    const choices = ['r', 'p', 's']
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}


function win() {
    userWin()
    console.log (`You win!\nYour score: ${userScore}\nComputer score: ${computerScore}`)

}

function lose() {
    userLose()
    console.log (`You lose!\nYour score: ${userScore}\nComputer score: ${computerScore}`)

}

function tie() {
console.log (`Tie!\nYour score: ${userScore}\nComputer score: ${computerScore}`)
}

function playRound() {
    let userPrompt = prompt ("Rock, Paper or Scissors?").toLowerCase();
    const computerChoice = computerPlay();
    switch (userPrompt + computerChoice) {
    case "rocks":
    case "paperr":
    case "scissorsp":
        win();
        break; 
    case "scissorsr":
    case "rockp":
    case "papers":
        lose();
        break;
    case "rockr":
    case "paperp":
    case "scissorss":
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

    if (userScore > computerScore)
    return("You beat the computer!")

    else if (userScore === computerScore)
    return("You tied with the computer!")

    else if (userScore < computerScore)
    return("You lost to the computer!")
}

