$(document).ready(function () {
    // Create array of words to guess
    let words = [
        "ghost", "witch", "pumpkin", "skeleton", "cauldron"
    ];
    // Create variable for Remaining Guesses
    let remaining = 12;
    // Create variable for Wins (doesn't reset when hangmanLoop resets bc it's outside?)
    let wins = 0;
    // Create array for Letters Guessed
    let guessed = [];
    // Create empty array for Answer (will populate with results of For Loop later)
    let answer = [];
    // Capture whatever key user pressed 
    let guess = event.key;
    //Create function that runs game when key is pressed
    function newGame() {
        // Reset Remaining Guesses to 12
        remaining = 12;
        //Reset guessed array
        guessed = [];
        // Reset answer array
        answer = [];
        // Reset Wins
        wins = 0;
        // Choose random word from array
        let word = words[Math.floor(Math.random() * words.length)];
        for (let i = 0; i < word.length; i++) {
            answer[i] = "_";
        };
    }
    // Start game loop when key is pressed
    document.onkeydown = function (event) {
        // Game only runs while Remaining Guesses is more than 0, otherwise it starts the hangmanLoop function over
        if (remaining === 0) {
            alert("YOU LOSE!");
            newGame();
        }
        // Scan answer for the letter pressed
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
}