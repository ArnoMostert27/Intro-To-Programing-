console.log("-------------------IF STATEMENT--------------------------");

// Declare a variable 'fruit' and assign it a string value
var fruit = "Watermelon";  
// Output a message including the fruit name
console.log("Today's fruit is " + fruit);  

// Check if the fruit name has more than 8 characters
if (fruit.length > 8) {  
    // This message will only print if the condition above is true
    console.log("Wow, that's a LONG fruit name!", '\n');  
}




console.log("---------------------------ELSE STATEMENT--------------------------------------");

// Declare a variable 'city' and assign it a string value
var city = "Tokyo";
// Output a welcome message with the city name
console.log("Welcome to " + city);

// Check if the city name has more than 6 characters
if (city.length > 6) {  
    // This block runs if city name is long
    console.log("That's a big city name!");
} else {                 
    // This block runs if city name is NOT long
    console.log("Your city name is pretty short.", '\n');  
}



console.log("-------------------ELSE-IF STATEMENT--------------------------");

// Boolean variables to represent pizza availability
var pizzaMargherita = false;   // Margherita pizza is NOT available
var pizzaPepperoni = true;     // Pepperoni pizza IS available
var pizzaHawaiian = false;     // Hawaiian pizza is NOT available

// First check if Margherita pizza is available
if (pizzaMargherita) {          
    console.log("Yay! Margherita it is!");
} 
// If Margherita is not available, check if Pepperoni pizza is available
else if (pizzaPepperoni) {   
    console.log("Pepperoni pizza is my choice!");
} 
// If neither Margherita nor Pepperoni is available, check Hawaiian pizza
else if (pizzaHawaiian) {    
    console.log("I guess I'll take Hawaiian.");
} 
// If none of the pizzas are available, this block will run
else {                        
    console.log("No pizza? I'll just have a salad.");
}
