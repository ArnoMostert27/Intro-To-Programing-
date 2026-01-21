
// Using the (!) NOT operator:
// The NOT operator reverses the boolean value.
// Since isWeekend is true, !isWeekend becomes false.
var isWeekend = true;
var needToShowerToday = !isWeekend;
needToShowerToday;

// Joining strings together:
// The + operator concatenates (joins) two strings into one.
var greeting = "Hello";
var myName = "Nick";
greeting + myName;

// Finding the length of the string:
// The .length property returns the number of characters in the string.
"Helloworld".length;

// Getting a single character:
// Strings are zero-indexed, so index 1 returns the second character.
var myName = "Nick";
myName[1];

// Numbers and operators:
// Demonstrates order of operations (BODMAS/PEMDAS).
// Multiplication and division are done before addition and subtraction.
1234 + 57 * 3 - 31 / 4;

// Post Incrementing (actually pre-increment here):
// The value of highFives is increased by 1.
var highFives = 0;
++highFives;

// Pre Decrementing:
// The value of highFives is decreased by 1.
var highFives = 5;
--highFives; 

// Boolean AND operator (&&):
// Returns true only if both values are true.
var isRaining = true;
var isNotRaining = false;
isRaining && isNotRaining;  

// OR operator (||):
// Returns true if at least one of the values is true.
var hasApple = true;
var hasBanana = false;
hasApple || hasBanana;

// Numbers with Boolean comparison:
// Compares two numbers and returns a boolean result.
var height = 65;
var heightRestriction = 60;
height < heightRestriction;  

// Converting to upper case:
// Converts all characters in the string to uppercase.
"Hello there, how are you doing?".toUpperCase();          

// Converting to lower case:
// Converts all characters in the string to lowercase.
"hELlo THERE, hOW ARE yOu doINg?".toLowerCase();

// Strict equality (===):
// Checks both value and data type for equality.
var mySecretNumber = 5; 
var chicoGuess = 3; 
mySecretNumber === chicoGuess;      

// Double equals (==):
// Checks only the value, not the data type.
var stringNumber = "5"; 
var actualNumber = 5;
stringNumber == actualNumber; 

// Slice method:
// Extracts part of a string and returns it as a new string.

// Example 1:
// Returns characters from index 0 up to (but not including) index 4.
"This is a long string".slice(0, 4);

// Example 2:
// Returns characters from index 7 up to (but not including) index 12.
"Hello, World!".slice(7, 12);

