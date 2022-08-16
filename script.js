//  grabs buttons for use in script, declares variables
const choices = document.querySelectorAll('.choice');
let buttonText;
let playerChoice;

//  Gets computer choice
function getComputerChoice() {
    const rps = ['Rock', 'Paper', 'Scissors'];
    return rps[Math.floor(Math.random() * rps.length)];
} 

//  Grabs button text and sends value to buttonText variable when player clicks a button
choices.forEach((button) => {
    button.addEventListener('click', () => {
        buttonText = button.textContent;
    });
});

// Plays a round when user chooses and clicks a button
function playRound(playerChoice, computerChoice) {
    playerChoice = buttonText;
    computerChoice = getComputerChoice();

    console.log(playerChoice+' - '+computerChoice);
}

// Fires off playRound function
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