"use strict";
const guessInput = document.querySelector("input");
const submitBtn = document.querySelector(".btn");
const resetBtn = document.querySelector(".reset-game");
const correctGuess = document.querySelector(".correct-number");
const incorrectGuess = document.querySelector(".incorrect-number");

let guessesLeft = 3;

let randomNumber = Math.floor(Math.random() * 10) + 1;

console.log(randomNumber);

function addCorrectNumber() {
  correctGuess.classList.remove("hidden");
  correctGuess.textContent = `${guessInput.value} is the correct number. Well done!!`;
}

function removeCorrectNumber() {
  correctGuess.classList.add("hidden");
}

function addIncorrectNumber() {
  incorrectGuess.classList.remove("hidden");
  incorrectGuess.textContent = `${guessInput.value} is incorrect, you have ${guessesLeft} left`;
}

function deductGuess() {
  guessesLeft -= 1;
}
function lostTheGame() {
  incorrectGuess.classList.remove("hidden");
  incorrectGuess.textContent = `${guessInput.value} is incorrect, you have no guesses left!`;
}
function removeIncorrectNumber() {
  incorrectGuess.classList.add("hidden");
}

function resetGame() {
  submitBtn.classList.remove("hidden");
  resetBtn.classList.add("hidden");
  removeIncorrectNumber();
  removeCorrectNumber();
  guessesLeft = 3;
  guessInput.disabled = false;
  guessInput.value = "";
  randomNumber = Math.floor(Math.random() * 10) + 1;
}

function switchBtn() {
  guessInput.disabled = true;
  submitBtn.classList.add("hidden");
  resetBtn.classList.remove("hidden");
}

function mirar() {
  if (Number(guessInput.value) === randomNumber && guessesLeft > 1) {
    removeIncorrectNumber();
    addCorrectNumber();
    switchBtn();
    guessInput.style.borderColor = "#28a745";
  } else if (
    Number(guessInput.value) !== randomNumber &&
    guessesLeft >= 1 &&
    guessesLeft !== 0
  ) {
    deductGuess();
    removeCorrectNumber();
    addIncorrectNumber();
    guessInput.style.borderColor = "#dc3545";
  } else {
    if (guessesLeft === 0) {
      lostTheGame();
      switchBtn();
      guessInput.style.borderColor = "#dc3545";
    }
  }
}

submitBtn.addEventListener("click", mirar);
resetBtn.addEventListener("click", resetGame);
