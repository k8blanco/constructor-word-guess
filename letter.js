
var Letter = function(letterValue, guessedYet) {
    this.letterValue = letterValue;
    this.guessedYet = guessedYet;

    //string value to store the underlying character for the letter
        letterValue = " ";
    //boolean value that stores whether that letter has been guessed yet
        guessedYet = false;
    //function that returns the underlying character if the letter has been guessed,
        //or a placeholder (underscore) if the letter hasn't been guessed
        this.showLetter = function() {
            if (this.guessedYet === true) {
                letterValue = this.letterValue;
            } else { 
                letterValue = "_ ";
            } return letterValue;
        }
    //a function that takes a character as an argument and checks it against 
        //the underlying character, updating the stored boolean value to true
        //if guessed correctly
        this.userGuess = function(character) {
            console.log(character);
            console.log(this.letterValue);
            if (character === this.letterValue) {
                this.guessedYet = true;
            }
        }

}

var letter = new Letter("a", "false");
var prettyLetter = JSON.stringify(letter);
console.log("new letter guessed: " + prettyLetter);
letter.userGuess("a");
console.log(letter.guessedYet);
letter.showLetter();
console.log(letter.showLetter());




module.export = Letter;