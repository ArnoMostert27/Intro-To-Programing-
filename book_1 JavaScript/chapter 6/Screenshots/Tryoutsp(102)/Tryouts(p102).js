// This program prints all powers of 3 that are less than 10,000
// It demonstrates both a for loop and a while loop in one file

// ------------------------------
// 1) Using a FOR loop
// ------------------------------

// Start with 3, keep multiplying by 3, and stop before reaching 10,000
for (let power = 3; power < 10000; power *= 3) {
    console.log("FOR loop power of 3:", power);
}

// ------------------------------
// 2) Using a WHILE loop
// ------------------------------

// Setup before the loop (initial value)
let powerOfThree = 3;

// Continue looping as long as the value is under 10,000
while (powerOfThree < 10000) {
    console.log("WHILE loop power of 3:", powerOfThree);

    // Multiply by 3 to get the next power
    powerOfThree *= 3;
}
