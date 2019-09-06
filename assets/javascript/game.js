console.log(this)
// Create variable for Wins (doesn't reset when hangmanLoop resets bc it's outside?)
let wins = 0;
//Create function that runs game when key is pressed
document.onkeyup = function hangmanLoop() {
    // Create array of words to guess
    let words = [
        "ghost", "witch", "pumpkin", "skeleton", "cauldron"
    ];
    // Choose random word from array
    let word = words[Math.floor(Math.random() * words.length)];
    // Create array for Answer
    let answer = [];
    for (let i = 0; i < word.length; i++) {
        answer[i] = "_";
    };
    // Create variable for Remaining Guesses
    let remaining = 12;
    // Create array for Letters Guessed
    let guessed = [];
    // Capture whatever key user pressed 
    let guess = event.key;
    // Game only runs while Remaining Guesses is more than 0, otherwise it starts the hangmanLoop function over
    if (remaining === 0) {
        alert("YOU LOSE! Refresh the page to start over.");
    }
    // Scan answer for that letter
    // if letter is in the word, insert letter in correct spot (index) of answer
    // else, put letter in "Letters Guessed" (add to end w/append?) and update Guesses Remaining counter
    for (let x = 0; x < word.length; x++) {
        if (word[x] === guess) {
            answer[x] = guess;
        }
        else {
            remaining--;
            guessed.push(guess);
        }
    }
}

// Add 1 to "Wins" when full word is guessed 
// Change image and heading over columns to represent the word they just guessed
// Also clear the old word and supply new ________ 