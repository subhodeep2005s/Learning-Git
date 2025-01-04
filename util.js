let luck = 0; // Initialize the luck variable

function getLuck() {
    luck += 1; // Increment luck by 1
}
console.log("Luck value:"); // Log the initial luck value
var pr = prompt('Please enter a number'); // Prompt the user for input
var p = parseInt(pr); // Parse the input to an integer

function call(p) {
    for (let i = 0; i < p; i++) {
        getLuck(); // Call getLuck for each iteration
    }
    return luck; // Return the updated luck value
}

if (!isNaN(p)) {
    call(p); // Execute the call function with the parsed input
    console.log('Final luck value:', luck); // Log the updated luck value
} else {
    console.log('Invalid input. Please enter a valid number.'); // Handle invalid input
}
