
// Create array of words to guess
let words = [
    "ghost", "witch", "pumpkin", "skeleton", "cauldron"
];
console.log(words);
// Create variable for Remaining Guesses
let remaining = 12;
console.log(remaining);
// Create variable for Wins (doesn't reset when hangmanLoop resets bc it's outside?)
let wins = 0;
console.log(wins);
// Create array for Letters Guessed
let guessed = [];
console.log(guessed);
// Create empty array for Answer (will populate with results of For Loop later)
let answer = [];
console.log(answer);
// Choose random word from array
let word = words[Math.floor(Math.random() * words.length)];
for (let i = 0; i < word.length; i++) {
    answer[i] = "_";
    console.log(answer)
};
// Start game loop when key is pressed
document.onkeydown = function (event) {
    // Capture whatever key user pressed 
    let guess = event.key;
    // Game only runs while Remaining Guesses is more than 0, otherwise it starts the hangmanLoop function over
    if (remaining > 0) {
        // Scan answer for the letter pressed
        // if letter is in the word, insert letter in correct spot (index) of answer
        // else, put letter in "Letters Guessed" (add to end w/append?) and update Guesses Remaining counter
        for (let x = 0; x < word.length; x++) {
            if (word[x] === guess) {
                answer[x] = guess;
                console.log(answer);
            }
        };
        if (guessed.includes(guess) === false && answer.includes(guess) === false) {
            remaining--;
            guessed.push(guess);
            console.log(remaining);
            console.log(guessed);
        }
        else if (answer.includes(guess) === false) {
            alert('You\'ve already guessed that letter!');
        };
    }
    else {
        alert('GAME OVER!');
        // Restart game somehow... Start function from beginning and reset Remaining & Guessed values? Or just replace HTML text with 12 & [] respectively?
    };
}
    // Add 1 to "Wins" when full word is guessed
    // Change image and heading over columns to represent the word they just guessed
    // Also clear the old word and supply new ________ 