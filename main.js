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


Think about putting the _'s as an unordered list and pushing the letters into there in
the right order somehow
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

/*
Sets underscores for how long the word is, also sets the id of the list item
to be the value of the character it represents
*/
(result = function() {
  var answer = document.querySelector(".results");
  var correctAnswer = document.createElement("ul");
  correctAnswer.setAttribute('id', 'word');
  for (var i = 0; i < chosenWord.length; i++) {
    chosenWordCharacter = chosenWord[i];
    var guess = document.createElement("li");
    guess.innerHTML = chosenWordCharacter;
    guess.setAttribute('id', guess.innerHTML);
    guess.innerHTML = "_";
    guess.setAttribute('class', 'guess');
    answer.appendChild(correctAnswer);
    correctAnswer.appendChild(guess);
  }
})();

/*
Allows the buttons to be clickable. If you click a button that is correct
it will add the letter to a correct guesses variable
*/

for (var i = 0; i < letterInput.length; i++) {
  // Grabs all the li items and puts them in an array
  var allGuesses = document.querySelectorAll('li');
  var counter = 10;
  var counterCheck = 0;
  var correctGuess = 0;

  letterInput[i].onclick = function(event) {
    var letterValue;
    letterValue = this.value;
    for (var j = 0; j < allGuesses.length; j++) {
      if (allGuesses[j].id == letterValue) {
        allGuesses[j].innerHTML = letterValue;
        correctGuess += 1;
      }
    }
    this.disabled = true;
    this.classList.add('disabled');
  }
  if (correctGuess == chosenWord.length) {
    console.log("you win!");
  }
}
