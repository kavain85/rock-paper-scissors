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
    // return results, do not console.log!
    // let playerSelection.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
    const winMessage = 'You win! '+computerSelection+' beats '+(playerSelection.charAt(0).toUpperCase() + playerSelection.substr(1).toLowerCase())+'!';
    const loseMessage = 'You lose! '+computerSelection+' beats '+(playerSelection.charAt(0).toUpperCase() + playerSelection.substr(1).toLowerCase())+'!';
    const drawMessage = 'Round is a draw!'
    if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper') {
        return loseMessage;
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissors') {
        return loseMessage;
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'rock') {
        return loseMessage;
    } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return drawMessage;
    } else {
        return winMessage;
    }
}

//  Use these to test function!

const playerSelection = 'rOcK';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));