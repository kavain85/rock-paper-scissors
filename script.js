//  grabs buttons for use in script, declares variables
const choiceButtons = document.querySelectorAll('.choice');
const pChoiceDisplayElement = document.querySelector('#p-choice');
const cChoiceDisplayElement = document.querySelector('#c-choice');
const pScoreDisplayElement = document.querySelector('#p-score');
const cScoreDisplayElement = document.querySelector('#c-score');
const winnerNameElement = document.querySelector('#winner-name');
const winStatusElement = document.querySelector('#win-status');
const gameResultsElement = document.querySelector('#game-results');
const resetButton = document.querySelector('#reset')
let buttonText;
let pScore = 0;
let cScore = 0;
let numRounds;

//  Gets computer choice
function getComputerChoice() {
    const rps = ['Rock', 'Paper', 'Scissors'];
    return rps[Math.floor(Math.random() * rps.length)];
} 


//  Grabs button text and sends value to buttonText variable when player clicks a button
choiceButtons.forEach((button) => {
    button.addEventListener('click', () => {
        buttonText = button.textContent;
        playRound();
    })});

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
    cChoice = cChoiceOutput.textContent;
    winnerName = winnerNameElement;
    winStatus = winStatusElement;

    if (pChoice === 'Rock' && cChoice === 'Paper'
        || pChoice === 'Paper' && cChoice === 'Scissors'
        || pChoice === 'Scissors' && cChoice === 'Rock') {
        winnerName.textContent = 'Computer';
        winStatus.textContent = 'wins round!'
        ++cScore;
        cScoreOutput.textContent = cScore;
        } else if (pChoice === cChoice) {
            winnerName.textContent = 'Round';
            winStatus.textContent = 'Draw';
        } else {
            winnerName.textContent = 'Player';
            winStatus.textContent = 'wins round!'
            ++pScore;
            pScoreOutput.textContent = pScore;
    }
};

function gameWinner() {
    if (pScore > cScore) {
        gameResultsElement.textContent = `Player wins game with score of ${pScore} to ${cScore}!`;
        gameResultsElement.style.color = `green`;
    } else if (pScore < cScore) {
        gameResultsElement.textContent = `Computer wins game with score of ${cScore} to ${pScore}!`;
        gameResultsElement.style.color = `red`;
    } else {
        gameResultsElement.textContent = `Game ended in a draw! Final score was ${pScore} to ${cScore}!`;
        gameResultsElement.style.color = `cyan`;
    }
    resetButton.style.visibility = 'visible';
};

resetButton.addEventListener('click', () => {
    window.location.reload();
});