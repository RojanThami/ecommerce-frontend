const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
let playerScore = 0;
let computerScore = 0;

function playgame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "It's a Tie!";
    }else{
        switch (playerChoice) { 
            case "rock":
                result = (computerChoice === "scissors") ? "You Win!" :"Computer Wins!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You Win!" : "Computer Wins!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You Win!" : "Computer Wins!";
                break;          
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;


    resultDisplay.classList.remove("greenText", "redText", "blueText");

    switch (result) {
        case "You Win!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "Computer Wins!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;

        case "It's a Tie!":
            resultDisplay.classList.add("blueText");
            break;
    }

}

