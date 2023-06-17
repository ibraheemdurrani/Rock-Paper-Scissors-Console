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

let changeHeading = document.getElementById("headingTwo")

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie") {
        return changeHeading.textContent = ` It's a Tie`;
    }

    else if (result == "Player") {

        return changeHeading.textContent = `You Won! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return changeHeading.textContent = `You Loose! ${computerSelection} beats ${playerSelection}`;
    }
}
let scoreComputer = document.getElementById("scorecomputer");
let scorePlayer = document.getElementById("scoreplayer");

const button = document.querySelectorAll("button");

function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}
function scoreReset(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText = 0);
}






//  scorePlayer.textContent = +1 



button.forEach((button) => {
    button.addEventListener('click', () => {
        const playerChoice = button.textContent.toLowerCase();
        const computerChoice = getComputerChoice()
        playRound(playerChoice, computerChoice);

        if (checkWinner(playerChoice, computerChoice) == "Computer") {
            incrementScore(scoreComputer)
        }
        else if (checkWinner(playerChoice, computerChoice) == "Player") {
            incrementScore(scorePlayer)
        }


        if (scorePlayer.innerText >= 5) {
            alert("You wins the game");
            scoreReset(scorePlayer);
            scoreReset(scoreComputer);
            changeHeading.innerHTML =  " Choose Your Weapon ";
        }
        else if (scoreComputer.innerText >= 5) {
            alert("Computer Wins The Game");
            scoreReset(scorePlayer);
            scoreReset(scoreComputer);
            changeHeading.innerHTML =  " Choose Your Weapon ";
            
        }

        else {
            console.log("The Match was a Tie")
        }
    })
})

