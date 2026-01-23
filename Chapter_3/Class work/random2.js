// Print a header to separate the random array section in the console
console.log('\n', "-------------------Generating a random Array------------------------");

// Declare an array of strings containing various phrases
var randomWords = [
  "herbert is hungry",
  "why is herbert always hungry",
  "why is herbert hungry again",
  "he should really go eat",
  "herbert is thinking about food...always",
  "bmw is better than mercedes"
];

// Print a header to separate the random array section in the console
console.log('\n', "-------------------Generating a random Array------------------------");

// Declare an array of words
var randomWords = ["Explosion", "Cave", "Princess", "Pen"];

// Generate a random index based on the array's length
// Math.random() generates a number between 0 (inclusive) and 1 (exclusive)
// Multiplying by the array length ensures the index is within bounds
// Math.floor() rounds down to get a valid integer index
var randomIndex = Math.floor(Math.random() * randomWords.length);

// Log a random word from the array using the generated index
console.log("random word:", randomWords[randomIndex]);


// Generate a random index between 0 and 5 (arrays are zero-based)
// Math.random() generates a number between 0 and 1
// Math.floor() rounds it down to the nearest whole number
var randomIndex = Math.floor(Math.random() * 5);

// Log a random element from the array using the generated index
console.log("random word:", randomWords[randomIndex]);

console.log('\n', "-------------Random Insult Generator------------------");

// Arrays storing different types of words
var randomBodyParts = ["FEET", "EARS", "TEETH"];
var randomAdjectives = ["STINKY", "SLOW", "IMMOBILE"];
var randomWords = [
  "PIG",
  "DONKEY",
  "FISH",
  "OSTRICH",
  "MOOSE",
  "SHEEP"
];

// Generate random indices for each array
var randomBodyPartIndex = Math.floor(Math.random() * randomBodyParts.length);
var randomAdjectiveIndex = Math.floor(Math.random() * randomAdjectives.length);
var randomWordIndex = Math.floor(Math.random() * randomWords.length);

// Construct a random insult by combining one word from each array
var randomInsult = "your " + randomBodyParts[randomBodyPartIndex] + " look like a " + randomAdjectives[randomAdjectiveIndex] + " " + randomWords[randomWordIndex];

// Output the randomly generated insult
console.log("Random Insult:", randomInsult);


