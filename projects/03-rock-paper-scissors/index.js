// Array of the hands
const choices = ["rock", "paper", "scissors"];

// Assigns pictures to each element in the array
choices[0] = "assets/hand-rock-solid.svg";
choices[1] = "assets/hand-paper-solid.svg";
choices[2] = "assets/hand-scissors-solid.svg";

// Image of the hand is displayed here
const player1ChoiceDisplay = document.getElementById("player1-choice-display");

// Score of Player 1 is displayed here
const player1ScoreDisplay = document.getElementById("player1-score");

// Image of the hand is displayed here
const player2ChoiceDisplay = document.getElementById("player2-choice-display");

// Score of Player 2 is displayed here
const player2ScoreDisplay = document.getElementById("player2-score");

// Status of the game is displayed here
const gameStatusDisplay = document.getElementById("game-status");

// The Reset Button
const resetGameButton = document.getElementById("reset-game-btn");

// Adds image and id to the rock button
const rockBtn = document.getElementById("rock-btn");
const rockImg = document.createElement("img");

// Adds image and id to the paper button
const paperBtn = document.getElementById("paper-btn");
const paperImg = document.createElement("img");

// Adds image and id to the scissors button
const scissorsBtn = document.getElementById("scissors-btn");
const scissorsImg = document.createElement("img");

// Creates img element to be shown in choice-display
const player1Hand = document.createElement("img");
const player2Hand = document.createElement("img");

// Initializes both scores
let player1Score = 0;
let player2Score = 0;

// When Rock button is clicked
rockBtn.addEventListener("click", function() {

    if (confirm("Your hand is rock?") == true) {

        let rock = 1; // For first click
        if (rock > 1) { // Checks if rock-btn is clicked more than once
            player1ChoiceDisplay.removeChild(player1Hand);
            player2ChoiceDisplay.removeChild(player2Hand);
        }

        // Puts rock picture in player1-choice-display
        player1Hand.setAttribute("src", "assets/hand-rock-solid.svg");
        player1Hand.setAttribute("alt", "Hand Rock");
        player1ChoiceDisplay.appendChild(player1Hand);

        // Randomize player 2's hand
        const randomChoice = Math.floor(Math.random() * choices.length);
        player2Hand.setAttribute("src", choices[randomChoice]);
        player2ChoiceDisplay.appendChild(player2Hand);

        // If player 2's hand is scissors
        if (player2Hand.getAttribute("src") == choices[2]) {
            gameStatusDisplay.textContent = "PLAYER 1 WINS";
            player1Score++;
            player1ScoreDisplay.textContent = player1Score;
        }

        // If player 2's hand is paper
        else if (player2Hand.getAttribute("src") == choices[1]) {
            gameStatusDisplay.textContent = "PLAYER 2 WINS";
            player2Score++;
            player2ScoreDisplay.textContent = player2Score;
        }

        // If player 2's hand is rock
        else if (player2Hand.getAttribute("src") == choices[0]) {
            gameStatusDisplay.textContent = "DRAW";
        }

        // Increments everytime it's clicked
        rock++;
    }
});

// When Paper button is clicked
paperBtn.addEventListener("click", function() {

    if (confirm("Your hand is paper?") == true) {

        let paper = 1; // For first click
        if (paper > 1) { // Checks if rock-btn is clicked more than once
            player1ChoiceDisplay.removeChild(player1Hand);
            player2ChoiceDisplay.removeChild(player2Hand);
        }

        // Puts rock picture in player1-choice-display
        player1Hand.setAttribute("src", "assets/hand-paper-solid.svg");
        player1Hand.setAttribute("alt", "Hand Paper");
        player1ChoiceDisplay.appendChild(player1Hand);

        // Randomize player 2's hand
        const randomChoice = Math.floor(Math.random() * choices.length);
        player2Hand.setAttribute("src", choices[randomChoice]);
        player2ChoiceDisplay.appendChild(player2Hand);

        // If player 2's hand is rock
        if (player2Hand.getAttribute("src") == choices[0]) {
            gameStatusDisplay.textContent = "PLAYER 1 WINS";
            player1Score++;
            player1ScoreDisplay.textContent = player1Score;
        }

        // If player 2's hand is scissors
        else if (player2Hand.getAttribute("src") == choices[2]) {
            gameStatusDisplay.textContent = "PLAYER 2 WINS";
            player2Score++;
            player2ScoreDisplay.textContent = player2Score;
        }

        // If player 2's hand is paper
        else if (player2Hand.getAttribute("src") == choices[1]) {
            gameStatusDisplay.textContent = "DRAW";
        }

        // Increments everytime it's clicked
        paper++;
    }
});

// When Scissors button is clicked
scissorsBtn.addEventListener("click", function () {

    if (confirm("Your hand is scissors?") == true) {

        let scissors = 1; // For first click
        if (scissors > 1) { // Checks if rock-btn is clicked more than once
            player1ChoiceDisplay.removeChild(player1Hand);
            player2ChoiceDisplay.removeChild(player2Hand);
        }

        // Puts rock picture in player1-choice-display
        player1Hand.setAttribute("src", "assets/hand-scissors-solid.svg");
        player1Hand.setAttribute("alt", "Hand Scissors");
        player1ChoiceDisplay.appendChild(player1Hand);

        // Randomize player 2's hand
        const randomChoice = Math.floor(Math.random() * choices.length);
        player2Hand.setAttribute("src", choices[randomChoice]);
        player2ChoiceDisplay.appendChild(player2Hand);

        // If player 2's hand is paper
        if (player2Hand.getAttribute("src") == choices[1]) {
            gameStatusDisplay.textContent = "PLAYER 1 WINS";
            player1Score++;
            player1ScoreDisplay.textContent = player1Score;
        }

        // If player 2's hand is rock
        else if (player2Hand.getAttribute("src") == choices[0]) {
            gameStatusDisplay.textContent = "PLAYER 2 WINS";
            player2Score++;
            player2ScoreDisplay.textContent = player2Score;
        }

        // If player 2's hand is scissors
        else if (player2Hand.getAttribute("src") == choices[2]) {
            gameStatusDisplay.textContent = "DRAW";
        }

        // Increments everytime it's clicked
        scissors++;
    }
});

// When Reset Button is clicked
resetGameButton.addEventListener("click", function () { 
    location.reload();
});