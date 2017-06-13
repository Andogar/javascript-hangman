/****************************************************************

Take input from user via button, each button corresponds to it's letter

make an array or string of characters of the alphabet
When you push a button its value is a character of the alphabet
Check to see if that character is in the array or string of characters
If it is, take that character out of the initial array of characters and push it to the page and new array of tried characters
If it is not, return a message saying that the letter has been tried already and to try again

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
var letterInput = document.querySelectorAll('button');
var correctCharactersHTML = document.querySelector(".correct-letters");
var answer = document.querySelector(".results");
var characters = "abcdefghijklmnopqrstuvwqyz";
var spaces = [];
var spacesDisplay;

// Sets the spaces to show how long the word is

for (var i = 0; i < chosenWord.length; i++) {
  spaces.push("_");
  spacesDisplay = spaces.join(" ");
  answer.innerHTML = spacesDisplay;
}

/*
Allows the buttons to be clickable. If you click a button that is correct
it will add the letter to a correct guesses variable
*/

for (var i = 0; i < letterInput.length; i++) {
  letterInput[i].onclick = function(event) {
    var letterValue;
    var displayValue = " " + this.value;
    letterValue = this.value;
    console.log(letterValue);
    for (var j = 0; j < chosenWord.length; j++) {
      // loops through chosen word and still holds value of letterValue
      if (chosenWord[j] == letterValue) {
        correctCharacters.push(displayValue);
        correctCharactersHTML.innerHTML = correctCharacters;
      }
    }
    this.disabled = true;
    this.classList.add('disabled');
  }
}





var counter = 10;
var incorrectCharacters = [];
var correctCharacters = [];
var counterCheck = 0;
/*
Old code code purely console logging. Keeping for now to hold onto idea of guess limit

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
*/
