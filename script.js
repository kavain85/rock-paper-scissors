//  grabs buttons for use in script
const choices = document.querySelectorAll('button');

//  Gets computer choice, works
function getComputerChoice() {
    const rps = ['Rock', 'Paper', 'Scissors'];
    return rps[Math.floor(Math.random() * rps.length)];
} 

function getPlayerChoice() {
    choices.forEach((button) => {
        button.addEventListener('click', (playerChoice) => {
            return button.textContent;
        });
    });
}

// Plays a round when user chooses and clicks a button
function playRound() {
    //  does not work
    let playerChoice = getPlayerChoice();
    //  works
    let computerChoice = getComputerChoice();
    //  works
    console.log(playerChoice+' - '+computerChoice);
}

// Fires off playRound function, works
choices.forEach((button) => {
    button.addEventListener('click', () => {
        playRound();
    });
});


// Original playRound code from console version
// function playRound(playerChoice, computerSelection) {
//  const winMessage = `You win! ${playerChoice} beats ${computerSelection}!`;
//  const loseMessage = `You lose! ${computerSelection} beats ${playerChoice}!`;
//  const drawMessage = `Round is a draw! You chose: ${playerChoice}, Computer chose: ${computerSelection}`;
//  if (playerChoice === 'Rock' && computerSelection === 'Paper'
//      || playerChoice === 'Paper' && computerSelection === 'Scissors'
//      || playerChoice === 'Scissors' && computerSelection === 'Rock') {
//      ++computerScore;
//      return loseMessage;
//  } else if (playerChoice === computerSelection) {
//      return drawMessage;
//  } else {
//      ++playerScore;
//      return winMessage;
//  }
// }