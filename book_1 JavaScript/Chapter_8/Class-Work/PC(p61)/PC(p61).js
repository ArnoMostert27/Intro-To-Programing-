// //1
// var generateRandomInsult = function () {
//   console.log('\n', "-------------NUMBER 1------------------")
//   // Array containing descriptive words (adjectives)
//   var adjectives = ["smelly", "lazy", "clumsy", "weird"];

//   // Array containing naming words (nouns)
//   var nouns = ["donkey", "potato", "sock", "banana"];

//   // Select a random adjective from the adjectives array
//   var randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];

//   // Select a random noun from the nouns array
//   var randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

//   // Combine the random adjective and noun to form an insult sentence
//   return "You are a " + randomAdjective + " " + randomNoun + "!";

//   // Output the generated insult to the console
//   console.log(insult);
// }


//2
console.log('\n', "-------------NUMBER 2------------------")
var insult = function () {
  // Array of human body parts to describe
  var bodyParts = ["face", "hair", "voice", "laugh"];

  // Array of adjectives used to compare and exaggerate
  var adjectives = ["ridiculous", "hairy", "ugly", "noisy"];

  // Array of animals used in the comparison
  var animals = ["monkey", "pig", "goat", "hyena"];

  // Array of animal body parts for the insult
  var animalParts = ["tail", "nose", "ears", "legs"];

  // Build the insult sentence by randomly selecting one item from each array
  return "Your " +
    bodyParts[Math.floor(Math.random() * bodyParts.length)] +   // Random body part
    " is more " +
    adjectives[Math.floor(Math.random() * adjectives.length)] + // Random adjective
    " than a " +
    animals[Math.floor(Math.random() * animals.length)] +       // Random animal
    "'s " +
    animalParts[Math.floor(Math.random() * animalParts.length)] + // Random animal body part
    ".";


}

// Display the generated insult in the console
console.log(insult());



// //3
// // (I PREFER JOIN CAUSE TO ME ITS MORE LOGIC AS PLUS COULD MEAN SO MUCH MORE IN LIFE WHERE JOIN JUST MEANS JOIN TO THINGS TOGETHER AND IT MAKE THE CODE LINE SHORTER)
// console.log('\n', "-------------NUMBER 3------------------")
// // Create an array containing each word of the insult sentence
// var insultArray = ["You", "are", "a", randomAdjective, randomNoun + "!"];

// // Join all elements of the array into a single string,
// // separating each word with a space
// var insult = insultArray.join(" ");

// // Output the final insult sentence to the console
// console.log(insult);








// //4
// console.log('\n', "-------------NUMBER 4------------------")
// // Create an array of numbers
// var numbers = [3, 2, 1];

// // Join the numbers into a single string,
// // placing the text " is bigger than " between each value
// var result = numbers.join(" is bigger than ");

// // Output the final sentence to the console
// console.log(result);
