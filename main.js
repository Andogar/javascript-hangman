/****************************************************************

Take input from user via button, each button corresponds to it's letter
Push that character into the checkForCharacter function to see if the character is in the word
Display a list of incorrect characters and correct ones
After either 10 incorrect guesses or the word completely guessed, show the full word at the bottom
Potentially populate the word with the correct letters underneath the letters

****************************************************************/

// Here are the 100 most popular words in English, as totally
// stolen from here: https://gist.github.com/gravitymonkey/2406023
var commonWords = [
  "the","of","and","a","to","in","is","you","that","it","he",
  "was","for","on","are","as","with","his","they","I","at","be",
  "this","have","from","or","one","had","by","word","but","not",
  "what","all","were","we","when","your","can","said","there",
  "use","an","each","which","she","do","how","their","if","will",
  "up","other","about","out","many","then","them","these","so",
  "some","her","would","make","like","him","into","time","has",
  "look","two","more","write","go","see","number","no","way",
  "could","people","my","than","first","water","been","call",
  "who","oil","its","now","find","long","down","day","did","get",
  "come","made","may","part"
];

// Create a function that choses a random word from `commonWords` and returns it
var chooseRandomWord = function(array) {
  return array[Math.floor(Math.random() * Math.max(array.length - 1), 0)];
}
var chosenWord = chooseRandomWord(commonWords);
var answerWord = chosenWord;

var letterInput = document.querySelectorAll('button');
var correctLettersHTML = document.querySelector(".correct-letters");
var incorrectLettersHTML = document.querySelector(".attempts");
var answer = document.querySelector(".results");

var incorrectCharacters = [];
for (var i = 0; i < letterInput.length; i++) {
  letterInput[i].onclick = function(event) {
    var letterValue;
    letterValue = " " + this.value;
    incorrectCharacters.push(letterValue);
    incorrectLettersHTML.innerHTML = incorrectCharacters;
  }
}

var counter = 10;
var incorrectCharacters = [];
var correctCharacters = [];
var counterCheck = 0;
// Create a function that accepts a single character argument
var checkForCharacter = function(character) {
  if (counterCheck <= counter) {
    for (var i = 0; i < chosenWord.length; i++) {
      if (character == chosenWord[i]) {
        correctCharacters.push(character);
        chosenWord = chosenWord.slice(0, i) + chosenWord.slice(i+1);
        return "These characters are correct: " + correctCharacters;
        if (chosenWord == "") {
          return "You did it! The correct word was " + answerWord + "."
        }
      } else {
        incorrectCharacters.push(character);
        counterCheck++
        console.log("You have tried these characters: " + incorrectCharacters);

      }
    }
  } else {
    return "You've run out of guesses";
  }
}
