function pickRandomWord(words) {
   var randomIndex = Math.floor(Math.random() * words.length);
   return words[randomIndex];
}

var generateRandomInsult = function () {
   // Array of body parts to be insulted
   var randomBodyParts = ["Face", "Nose", "Hair"];

   // Array of adjectives to describe the insult
   var randomAdjectives = ["Smelly", "Boring", "Stupid"];

   // Array of random nouns to add humor to the insult
   var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

   // Join all the random strings into a sentence:
   var randomString = "Your " + pickRandomWord(randomBodyParts) + " is like a " + pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + "!!!";

   // Return the final insult string
   return randomString;
};

// Call the function to generate and return a random insult
console.log(generateRandomInsult());


//Option 2 
var generateRandomInsult = function () {
   var randomBodyParts = ["Face", "Nose", "Hair"];
   var randomAdjectives = ["Smelly", "Boring", "Stupid"];
   var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

   // Pick random items directly without helper function
   var bodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
   var adjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
   var word = randomWords[Math.floor(Math.random() * randomWords.length)];

   return "Your " + bodyPart + " is like a " + adjective + " " + word + "!!!";
};

console.log(generateRandomInsult());


//Option 3
function generateRandomInsult() {
   var randomBodyParts = ["Face", "Nose", "Hair"];
   var randomAdjectives = ["Smelly", "Boring", "Stupid"];
   var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

   return "Your " + 
          randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)] + 
          " is like a " + 
          randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)] + 
          " " + 
          randomWords[Math.floor(Math.random() * randomWords.length)] + 
          "!!!";
};

console.log(generateRandomInsult());