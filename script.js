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
    let playerChoice = playerSelection.charAt(0).toUpperCase() + playerSelection.substr(1).toLowerCase()
    const winMessage = 'You win! '+playerChoice+' beats '+computerSelection+'!';
    const loseMessage = 'You lose! '+computerSelection+' beats '+playerChoice+'!';
    const drawMessage = 'Round is a draw! You chose: '+playerChoice+', Computer chose: '+computerSelection+'.';

    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Paper') {
        return loseMessage;
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Scissors') {
        return loseMessage;
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Rock') {
        return loseMessage;
    } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return drawMessage;
    } else {
        return winMessage
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Please choose Rock, Paper, or Scissors');
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();