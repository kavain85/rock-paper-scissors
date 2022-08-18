//  grabs buttons for use in script, declares variables
const choiceButtons = document.querySelectorAll('.choice');
const pChoiceDisplay = document.querySelector('#p-choice');
const cChoiceDisplay = document.querySelector('#c-choice');
const pScoreDisplay = document.querySelector('#p-score');
const cScoreDisplay = document.querySelector('#c-score');
const winnerName = document.querySelector('#winner-name');
const winStatus = document.querySelector('#win-status');
let buttonText;
let playerScore;
let computerScore;

//  Gets computer choice
function getComputerChoice() {
    const rps = ['Rock', 'Paper', 'Scissors'];
    return rps[Math.floor(Math.random() * rps.length)];
} 

//  Grabs button text and sends value to buttonText variable when player clicks a button
choiceButtons.forEach((button) => {
    button.addEventListener('click', () => {
        buttonText = button.textContent;
    });
});

// Plays a round when user chooses and clicks a button
function playRound(playerChoice, computerChoice) {
    pChoiceOutput = pChoiceDisplay;
    cChoiceOutput = cChoiceDisplay;
    pScoreOutput = pScoreDisplay;
    cScoreOutput = cScoreDisplay;
    playerChoice = buttonText;
    cChoiceOutput.textContent = getComputerChoice()
        
    // const winMessage = `You chose: ${playerChoice}. Computer chose: ${computerChoice}. You win!`;
    // const loseMessage = `You chose: ${playerChoice} \r\nComputer chose: ${computerChoice} \nYou lose!`;
    // const drawMessage = `You chose: ${playerChoice} \r\nComputer chose: ${computerChoice} \nRound is a draw!`;
    // if (playerChoice === 'Rock' && computerChoice === 'Paper'
    //     || playerChoice === 'Paper' && computerChoice === 'Scissors'
    //     || playerChoice === 'Scissors' && computerChoice === 'Rock') {
    //     // ++computerScore;
    //     pChoiceOutput.textContent = playerChoice;
    // } else if (playerChoice === computerChoice) {
    //     // choiceOutput.textContent = drawMessage;
    // } else {
    //     // ++playerScore;
    //     // choiceOutput.textContent = winMessage;
    // }

    console.log(`Player: ${playerChoice}, Computer: ${cChoiceOutput.textContent}`);
}

// Fires off playRound function, similar to game() in original version
choiceButtons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound();
    });
});