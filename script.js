let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:


function generateTarget() {
  return Math.floor(Math.random() * 10)
}

function getAbsoluteDistance(n1, n2) {
  return Math.abs(n1 - n2);
}

function compareGuesses(humanGuess, computerGuess, target) {
  if(humanGuess > 9 || humanGuess < 0) {
  alert('Please choose a number between 0 and 9');
  return false
}
  if(getAbsoluteDistance(humanGuess, target) < getAbsoluteDistance(computerGuess, target) || getAbsoluteDistance(humanGuess, target) === getAbsoluteDistance(computerGuess, target)) {
    return true
  } else {
    return false
  }
}

function updateScore(winner) {
  if(winner === 'human') {
    humanScore++;
  }
  if (winner === 'computer') {
    computerScore++;
  }
}

function advanceRound() {
  currentRoundNumber++
}