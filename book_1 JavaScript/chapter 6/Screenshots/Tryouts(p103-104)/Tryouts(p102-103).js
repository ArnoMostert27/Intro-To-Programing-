// ======================================================
// PRACTICE: Conditionals and Loops (All in One File)
// ======================================================

console.log('\n', "-------------Awesome Animals------------------")
// ------------------------------------------------------
// #1: Awesome Animals
// ------------------------------------------------------

// Original array of animals
var animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];

// Loop through the array and make each animal "Awesome"
for (var i = 0; i < animals.length; i++) {
    // Reassign each value at the current index
    animals[i] = "Awesome " + animals[i];
}

// Log the modified array
console.log("Awesome Animals:", animals);

console.log('\n', "-------------Random String Generator------------------")
// ------------------------------------------------------
// #2: Random String Generator
// ------------------------------------------------------

// String containing all letters of the alphabet
var alphabet = "abcdefghijklmnopqrstuvwxyz";

// Start with an empty string
var randomString = "";

// Keep adding random letters until the string length is 6
while (randomString.length < 6) {
    // Generate a random index based on the alphabet length
    var randomIndex = Math.floor(Math.random() * alphabet.length);

    // Get the random letter at that index
    var randomLetter = alphabet[randomIndex];

    // Add the letter to the end of the string
    randomString += randomLetter;
}

// Log the final random string
console.log("Random String:", randomString);

console.log('\n', "-------------h4ck3r sp34k------------------")
// ------------------------------------------------------
// #3: h4ck3r sp34k
// ------------------------------------------------------

// Input string
var input = "javascript is awesome";

// Empty string to store the converted result
var output = "";

// Loop through each character in the input string
for (var j = 0; j < input.length; j++) {
    var letter = input[j];

    // Replace specific letters with numbers
    if (letter === "a") {
        output += "4";
    } else if (letter === "e") {
        output += "3";
    } else if (letter === "i") {
        output += "1";
    } else if (letter === "o") {
        output += "0";
    } else {
        // Add the original letter if no replacement is needed
        output += letter;
    }
}

// Log the converted h4ck3r sp34k string
console.log("H4ck3r Sp34k:", output);
