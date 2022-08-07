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

// Plays the game for 5 rounds, and declares winner after all rounds have been played
function game() {

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Please choose Rock, Paper, or Scissors');
        const computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection)+
            `\nCurrent Score - Player: ${playerScore}, Computer: ${computerScore}.`);
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
    // Shows scoreboard at end of each game
    console.log(scoreBoard());
}

game();