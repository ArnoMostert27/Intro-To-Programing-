// Creating variables and Assigning Values
var book = 5;
console.log("Book value:", book);

var myFirstName = "Cursh";
console.log("My name:", myFirstName);

console.log("----------String properties and methods-------");
console.log("Length of the string:","I am a string.".length);             
console.log("Index of the string:","my first javascript string.".indexOf("first"));             

console.log("--------Boolean expressions-----------");
console.log("Is this condition true or false:", 1 < 10);                    
console.log("Is this condition true or false:", false === false);   
console.log("Is this condition true or false:", 40 >= 40);          

// Alert with string, number, and math
alert("Good job!");
alert(300);
alert(37 * 37);

// Alert using a variable
var myNameIs = "Lee";
alert(myNameIs);

// Alert combining text and variables
var firstName = "Cee";
var yourScore = 30;
alert("Hi, " + firstName + ". Your current score is: " + yourScore);

// Using document.write()
document.write("------Using document.write Part 1 --------<br>");
document.write("Hi, Mom!<br>");
document.write("How are you?<br>");
document.write("I'm great! Thanks!<br>");
document.write("------End of Part 1 --------<br><br>");

// Custom letter example combining input and output
var toName = "Lee";
var fromName = "The Grammy Awards";
var letterBody = 'The committee said, "We can\'t believe how good your song is!"';


document.write("------Using document.write Part 2 --------<br>");
document.write("Dear " + toName + ",<br><br>");
document.write(letterBody + "<br><br>");
document.write("Sincerely,<br>");
document.write(fromName,"<br><br>");
document.write("------End of Part 2 --------");