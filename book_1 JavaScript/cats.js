
// Function that draws cats in the console
// It takes one parameter: howManyTimes (the number of cats to draw)
var drawCats = function (howManyTimes) {

    // Loop that runs from 0 up to (but not including) howManyTimes
    for (var i = 0; i < howManyTimes; i++) {

        // Print the current number and a cat face to the console
        console.log(i + " =^.^=");
    }
};

// Call the function and draw 10 cats in the console
// You can change 10 to any number you like
drawCats(10);
