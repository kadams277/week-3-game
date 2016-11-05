document.addEventListener("DOMContentLoaded", function() {

// generate random letters
	var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// create variables for categories
	var wins = 0;
	var losses = 0;
	var guessesLeft = 0;

// pick a random letter
	var random = Math.random();
	// give us an index for our array that will work
	// words an array - length property
	// between 0 and 25 with decimals
	var indexRandom = random * letters.length;

	// an integer between 0-26
	var flooredNumber = Math.floor(indexRandom);

	// get our random letter
	var randomLetters = letters[flooredNumber];

	// test our random word getter
	console.log(letters[flooredNumber]);

// when user presses the key

	document.onkeyup = function(event) {

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

		for (var i = 0; i < randomLetters.length; i++){
			if (userGuess === randomLetters){
				wins++;
				guessesLeft--;
			} else{
				losses++;
				guessesLeft--;
			}
		}
	document.querySelector("#wins").innerHtml = wins;
	document.querySelector("#losses").innerHtml = losses;
	document.querySelector("#guessesLeft").innerHtml = guessesLeft;

};

});



