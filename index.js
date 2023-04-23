// randomly return rock papers scissors with the help of a function 
function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    let computerChoice = choice[Math.floor(Math.random() * choice.length)]
    return computerChoice;
}


function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper"
    ) {
        return "Player"
    }
    else {
        return "Computer"
    }
}


function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie") {
        return "Its a Tie"
    }

    else if (result == "Player") {
        return `You Won! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}




function game() {
    console.log("Welcome")
    let scorePlayer = 0;
    let scoreComputer = 0;
    for (let i = 0; i < 5; i++) {
        const getplayerselection = prompt("Choose from rock paper or scissors", "")
        const playerSelection = getplayerselection.toLowerCase();
        const computerSelection = getComputerChoice();
        console.log("_________________________________________________________________")
        console.log(playRound(playerSelection, computerSelection))

        if (checkWinner(playerSelection, computerSelection) == "Player") {
            scorePlayer++
            console.log(scorePlayer)
        }
        else if (checkWinner(playerSelection, computerSelection) == "Computer") {
            scoreComputer++
            console.log(scoreComputer)
        }
        
    }

    
    if (scorePlayer > scoreComputer) {
        console.log("You Wins The Game")
    }
    else if (scorePlayer < scoreComputer) {
        console.log("Computer Wins The Game")
    }
    else {
        console.log("The Match was a Tie")
    }
}
game()
