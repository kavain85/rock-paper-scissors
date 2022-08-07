function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3);
    
    if (computerChoice === 0) {
        return 'Rock';
    } else if (computerChoice === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

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

let playerScore = 0;
let computerScore = 0;

function game() {

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Please choose Rock, Paper, or Scissors');
        const computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));
        console.log(`Current Score - Player: ${playerScore}, Computer: ${computerScore}.`);
    }

    function scoreBoard() {
    if (playerScore > computerScore) {
        return `You win the game! Final score: ${playerScore} - ${computerScore}!`
    } else if (playerScore == computerScore) {
        return `Game ended in a draw! Final score: ${playerScore} - ${computerScore}!`
    } else {
        return `You lost the game! Final score: ${playerScore} - ${computerScore}!`
    }
}

    console.log(scoreBoard());
}

game();