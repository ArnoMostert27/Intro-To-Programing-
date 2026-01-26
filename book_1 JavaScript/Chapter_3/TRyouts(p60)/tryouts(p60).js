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

//line 1
// Pick a random body part from the randomBodyParts array:
 var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];

//line 2
// Pick a random adjective from the randomAdjectives array:
 var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];

//line 3
// Pick a random word from the randomWords array:(old)
// var randomWord = randomWords[Math.floor(Math.random() * 5)];

// Pick a random word from the randomWords array:(Replacement)
 var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];


// Join all the random strings into a sentence:
var randomInsult = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!!!"; 
console.log(randomInsult)   ;
    "Your Nose is like a Stupid Marmot!!!"






