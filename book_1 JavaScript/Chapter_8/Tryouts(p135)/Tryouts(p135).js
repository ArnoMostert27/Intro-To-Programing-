// Define a function called sixthLetter that takes one argument: name
var sixthLetter = function (name) {

    // Check if the name has fewer than 6 characters
    if (name.length < 6) {
        // If it does, return a message instead of continuing
        return "That name is too short!";
    }

    // If the name has 6 or more characters,
    // return a sentence showing the sixth letter
    // Index 5 is used because JavaScript counts from 0
    return "The sixth letter of your name is " + name[5] + ".";
};

// Call the function (this line alone does not display anything)
sixthLetter("Nicholas");
// Expected result: "The sixth letter of your name is l."

// Use console.log to actually display the returned value
console.log(sixthLetter("Nicholas")); 
// Output: "The sixth letter of your name is l."

