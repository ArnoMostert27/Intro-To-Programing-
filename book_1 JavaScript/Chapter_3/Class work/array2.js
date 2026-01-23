var mixedDataType = [89,"Lesedi", false, EncodedVideoChunk, {herbert: 'why is it always me'}, [3,5,0,9,1,8,89], "stefan", ["bmw", "is","better" ,"than", "merc"], 21];
console.log("Data type value:", mixedDataType[6]);



// Declare an array containing multiple different data types
// This demonstrates that JavaScript arrays can store mixed values
var mixedDataType = [89,"Lesedi", false, EncodedVideoChunk, { herbert: 'why is it always me' }, [3, 5, 0, 9, 1, 8, 89],  "stefan",["bmw", "is", "better", "than", "merc"],21];
// Log the value stored at index 6 of the array
// Arrays are zero-indexed, so index 6 refers to the 7th element ("stefan")
console.log("Data type value:", mixedDataType[6]);

// Declare an array named `colors` that stores a list of color strings
var colors = ['red', 'blue', 'yellow', 'pink', 'black'];
// Access the element at index 2 of the array (arrays are zero-based, so this is "yellow")
// and print it to the console with a descriptive label
console.log("colors array index:", colors[2]);


// Update the value at index 1 in the `colors` array
// This replaces the original value ("blue") with "orange"
colors[1] = 'orange';

// Output the updated `colors` array to the console
console.log(colors);
// Log the total number of elements in the `colors` array
// The `length` property returns how many items the array contains
console.log("Colors Length:", colors.length);


// Declare an array containing multiple different data types
// This includes numbers, strings, booleans, an object, and nested arrays
var mixeddatatypesarray = [
  100,                 // Number
  'world',             // String
  false,               // Boolean
  { name: 'Doe' },     // Object
  [4, 5, 6],           // Array
  true,                // Boolean
  [7, 8, 9, 10]        // Array
];
// Access the value at index 3 (the object { name: 'Doe' })
// and display it in the console with a descriptive label
console.log("Data type Value:", mixeddatatypesarray[3]);


// Add new elements ("white" and "green") to the end of the `colors` array
// The `push()` method increases the array length and appends the values
colors.push('white', 'green');
// Log the updated array after appending the new colors
console.log("After-appending:", colors);


 // Remove the last element from the `colors` array using pop()
// The removed element is returned by the pop() method
console.log("Removed item:", colors.pop());
// Log the `colors` array after the last element has been removed
console.log("Array After-pop:", colors);

// Combine the `colors` array with another array called `mixedDataType`
// The `concat()` method creates a new array without modifying the originals
var BMW = colors.concat(mixedDataType);
// Output the newly created array that contains elements from both arrays
console.log("Concat:", BMW);

 
// Find the index position of the value "lemon" in the `allFruits` array
// The `indexOf()` method returns the index if found, or -1 if the value does not exist
console.log("Index-Of the value:", BMW.ind)


// Convert the `mixedDataType` array into a single string
// The `join(', ')` method separates each element with a comma and a space
var mixedString = mixedDataType.join('$ ');

// Output the converted string to the console
console.log("Converted String:", mixedString);



// Declare an empty array to store numeric values
var numbers = [];
// Add multiple numbers to the array using the push() method
numbers.push("HERBERT", "IS", "HUNGRY", 5, 6, 7);
// Log the contents of the numbers array to the console
console.log("Numbers Array:", numbers);


// Add elements (2, 8, 6) to the beginning of the `numbers` array
// The `unshift()` method increases the array length and shifts existing elements
numbers.unshift(2, 8, 6);
// Log the updated array after adding the new numbers at the start
console.log("Added:", numbers);


