// -------------------- FUNCTION DEFINITIONS --------------------

// Pick a random word from an array and return it
var pickWord = function () {
    var words = [
        "javascript",
        "monkey",
        "amazing",
        "pancake",
        "hangman"
    ];

    // Choose a random index from the words array
    return words[Math.floor(Math.random() * words.length)];
};

// Create and return the answer array filled with underscores
var setupAnswerArray = function (word) {
    var answerArray = [];

    // Create one underscore for each letter in the word
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }

    return answerArray;
};

// Show the player their current progress using alert
var showPlayerProgress = function (answerArray) {
    alert(answerArray.join(" "));
};

// Ask the player for a guess and return it
var getGuess = function () {
    // Prompt returns a string or null if Cancel is clicked
    return prompt("Guess a letter, or click Cancel to stop playing.");
};

// Update the game state and return how many letters were guessed correctly
var updateGameState = function (guess, word, answerArray) {
    var correctGuesses = 0;

    // Loop through the word to check for matching letters
    for (var i = 0; i < word.length; i++) {
        if (word[i] === guess && answerArray[i] === "_") {
            answerArray[i] = guess;
            correctGuesses++;
        }
    }

    // Return the number of correct guesses
    return correctGuesses;
};

// Show the final answer and congratulate the player
var showAnswerAndCongratulatePlayer = function (answerArray) {
    alert("Good job! The answer was " + answerArray.join(""));
};

// -------------------- GAME LOGIC --------------------

// Pick a random word
var word = pickWord();

// Set up the answer array
var answerArray = setupAnswerArray(word);

// Track how many letters are left to guess
var remainingLetters = word.length;

// Main game loop
while (remainingLetters > 0) {

    // Show the player's progress
    showPlayerProgress(answerArray);

    // Get a guess from the player
    var guess = getGuess();

    // If player clicks Cancel, exit the loop
    if (guess === null) {
        break;

    // If input is not exactly one letter, show an error
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");

    // Otherwise, process the guess
    } else {
        var correctGuesses = updateGameState(guess, word, answerArray);
        remainingLetters -= correctGuesses;
    }
}

// Show the final answer and congratulate the player
showAnswerAndCongratulatePlayer(answerArray);
