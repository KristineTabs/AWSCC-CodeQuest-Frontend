// Tells if the number input is too high or low
const gameStatusDisplay = document.getElementById("game-status");

// User input
const numberInput = document.getElementById("ans-num");

// Button for checking the answer
const checkBtn = document.getElementById("check-btn");

// Displays how many attempts are left
const attemptsLeftDisplay = document.getElementById("attempts-left");

// Button for resetting the game
const resetBtn = document.getElementById("reset-btn");

// For generating a random number to guess from 1 to 20
let randomNumber = Math.floor(Math.random() * 20);

// Number of attempts at the start
let attempts = 5;

// Answer checker
checkBtn.addEventListener("click", function() {

    // Convert the user input into a number
    const guessInput = Number(numberInput.value);

    if (confirm("Is this your final answer?") == true) {

        if (guessInput == randomNumber) {
            gameStatusDisplay.textContent = "Correct Guess! Congratulations!";
            attempts = 5;
        }
        else if (guessInput != randomNumber) {

            if (guessInput < randomNumber) {
                gameStatusDisplay.textContent = "Incorrect! Your Guess is too Low";
                --attempts;
            }
            else if (guessInput > randomNumber){
                gameStatusDisplay.textContent = "Incorrect! Your Guess is too High";
                --attempts;
            }
        }

        attemptsLeftDisplay.textContent = `Attempts Left: ${attempts}`;

        if (attempts == 0) {
            gameStatusDisplay.textContent = "Out of Attempts. Try Again";
            numberInput.value = '';
        }
    }
});

resetBtn.addEventListener("click", function() {
    location.reload();
});
