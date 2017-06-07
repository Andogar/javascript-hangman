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
var counter = 10;
var triedCharacters = [];
var correctCharacters = [];
var counterCheck = 0;
// Create a function that accepts a single character argument
var checkForCharacter = function(character) {
  var result = false;
  triedCharacters.push(character);
  counterCheck++
  console.log("You have tried these characters: " + triedCharacters);
  if (counterCheck <= counter) {
    for (var i = 0; i < chosenWord.length; i++) {
      if (character == chosenWord[i]) {
        result = true;
        correctCharacters.push(character);
        chosenWord = chosenWord.slice(0, i) + chosenWord.slice(i+1);
        console.log("These characters are correct: " + correctCharacters);
        if (chosenWord == "") {
          console.log("You did it! The correct word was " + answerWord + ".")
        }
      } else {
        //
      }
    }
    return result;
  } else {
    return "You've run out of guesses";
  }
}
  // The function should check the `chosenWord` for that character
  // The function should return true if the character is in the given word
  // The function should return false if the character is not in the given word
  // The function should only be able to return true or false a certain number of times (the number stored in the `counter` variable)
  // The function should store and console.log every letter that has been passed to this function in the `triedCharacters` array
  // The function should store and console.log every letter in `chosenWord` that has been passed to this function in the `correctCharacters` array
  // If every letter in `chosenWord` word has been passed to this function, console.log "you guessed it"
