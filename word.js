
var Letter = require("./letter.js");



var Word = function() {
    // this.letterValue = letterValue;
    // this.guessedYet = guessedYet;

    //An array of new Letter objects representing the letters of the underlying word
    letterArr = [];

    //A function that returns a string representing the word. This should call the 
        //function on each letter object (the first function defined in Letter.js) 
        //that displays the character or an underscore and concatenate those together.
    this.newWord = function() {
        for (var i = 0; i < letterArr.length; i++) {
            letterArr[i].showLetter();
            console.log(letterArr.join());
        };
    }

    //A function that takes a character as an argument and calls the guess function on 
    //each letter object (the second function defined in Letter.js)//
    this.guessLetter = function(character) {
        for (var i = 0; i < letterArr.length; i++) {
            letterArr[i].userGuess(character);
        }
    }


};

module.export = Word;