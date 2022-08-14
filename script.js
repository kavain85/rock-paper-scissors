const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');




// Learned how to create an arry, then select a random value
const rps = ['Rock', 'Paper', 'Scissors'];

// Scores start at zero
let playerScore = 0;
let computerScore = 0;

// Gets computers choice for each round
function getComputerChoice() {
    return rps[Math.floor(Math.random()*rps.length)]
}

// Plays a round, and grants points to winner of round
function playRound(playerSelection, computerSelection) {

    let playerChoice = playerSelection.charAt(0).toUpperCase() + playerSelection.substr(1).toLowerCase();
    
    const winMessage = `You win! ${playerChoice} beats ${computerSelection}!`;
    const loseMessage = `You lose! ${computerSelection} beats ${playerChoice}!`;
    const drawMessage = `Round is a draw! You chose: ${playerChoice}, Computer chose: ${computerSelection}`;

    if (playerChoice === 'Rock' && computerSelection === 'Paper'
        || playerChoice === 'Paper' && computerSelection === 'Scissors'
        || playerChoice === 'Scissors' && computerSelection === 'Rock') {
        ++computerScore;
        return loseMessage;
    } else if (playerChoice === computerSelection) {
        return drawMessage;
    } else {
        ++playerScore;
        return winMessage;
    }
}