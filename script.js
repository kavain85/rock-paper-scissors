//  grabs buttons for use in script, declares variables
const choiceButtons = document.querySelectorAll('.choice');
const pChoiceDisplayElement = document.querySelector('#p-choice');
const cChoiceDisplayElement = document.querySelector('#c-choice');
const pScoreDisplayElement = document.querySelector('#p-score');
const cScoreDisplayElement = document.querySelector('#c-score');
const winnerNameElement = document.querySelector('#winner-name');
const winStatusElement = document.querySelector('#win-status');
let buttonText;
let pScore;
let cScore;

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
function playRound() {
    pChoiceOutput = pChoiceDisplayElement;
    cChoiceOutput = cChoiceDisplayElement;
    pScoreOutput = pScoreDisplayElement;
    cScoreOutput = cScoreDisplayElement;
    pChoiceText = buttonText;
    cChoiceOutput.textContent = getComputerChoice();
    pChoiceOutput.textContent = pChoiceText;
    pChoice = pChoiceOutput.textContent;
    cChoice = cChoiceOutput.textContent
    // cChoiceOutput.textContent = getComputerChoice();
    // pChoiceOutput.textContent = buttonText;
    // pChoice = pChoiceOutput.textContent(buttonText);
    // cChoice = cChoiceOutput.textContent(getComputerChoice);
    winnerName = winnerNameElement.textContent;

    roundDraw();

    // const winMessage = `You chose: ${playerChoice}. Computer chose: ${computerChoice}. You win!`;
    // const loseMessage = `You chose: ${playerChoice} \r\nComputer chose: ${computerChoice} \nYou lose!`;
    // const drawMessage = `You chose: ${playerChoice} \r\nComputer chose: ${computerChoice} \nRound is a draw!`;
    if (pChoice === 'Rock' && cChoice === 'Paper'
        || pChoice === 'Paper' && cChoice === 'Scissors'
        || pChoice === 'Scissors' && cChoice === 'Rock') {
        
        // ++computerScore;
    } else if (pChoice === cChoice) {
        // choiceOutput.textContent = drawMessage;
    } else {
        // ++playerScore;
        
        // choiceOutput.textContent = winMessage;
    }

    console.log(`Player: ${pChoice}, Computer: ${cChoice}`);

    function roundDraw() {
        winnerName = 'Round';
        winStatus = 'Draw';
    }
}

// Fires off playRound function, similar to game() in original version
choiceButtons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound();
    });
});