// #1: Scorekeeper
// Create an object to store players' scores
// Keys are player names, values are their scores
console.log('\n', "-------------Number 1------------------")
// they all start off with 0 points
var scores = {
  Alice: 0, 
  Bob: 0,      
  Charlie: 0};

console.log(scores)

console.log('\n', "Initial Scores:", scores);
// Increase Alice's score by 5 points using dot notation
// Now Alice has 5 points
scores.Alice += 5;

console.log('\n', "-------------Number 2------------------");
// #2: Digging into Objects and Arrays
// Create an object with nested structures
var myCrazyObject = {
  name: "A ridiculous object","some array": [7, 9, { purpose: "confusion", number: 123 }, 3.3],"random animal": "Banana Shark"};

// Access the number 123
// Bracket notation is required because "some array" contains a space
var num = myCrazyObject["some array"][2].number;

// Output the results to the console
console.log(scores); // { Alice: 5, Bob: 0, Charlie: 0 }
console.log(num);    // 123


console.log('\n', "To get the number 123 out of the object using one line of JavaScript, you first access the property called (some array) using dot notation because the key contains a space. This gives you the array stored inside the object. Next, you select the third item in that array using index 2, since arrays start counting from zero. That third item is itself an object. Finally, you access the number property of that object, which returns the value 123.In one line of JavaScript, this is done by chaining the object access, array index, and property access together.");


//To get the number 123 out of the object using one line of JavaScript, you first access the property called "some array" using dot notation because the key contains a space. 
//This gives you the array stored inside the object. 
//Next, you select the third item in that array using index 2, since arrays start counting from zero. That third item is itself an object. 
//Finally, you access the number property of that object, which returns the value 123.
//In one line of JavaScript, this is done by chaining the object access, array index, and property access together.