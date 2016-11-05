// computer guesses
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//declare the tallies
var wins = 0;
var losses = 0;
var guessesLeft = 0;
var guessesSoFar = 0;
var allUserGuesses = "";

// When the user presses the key it records the keypress and then sets it to userguess
document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	guessesSoFar = guessesSoFar++;
	// guessesSoFar = guessesSoFar + 1;
	allUserGuesses = allUserGuesses + userGuess;

	// "guesses left" is populated
	document.querySelector("#guessesSoFar").innerHTML= guessesSoFar;
	document.querySelector("#guessesRemaining").innerHTML= allUserGuesses;

	// This sets the computer guess equal to the random.
	var computerGuess = computerChoices[
		Math.floor(
			Math.random() * computerChoices.length
			)
		];

	// if letter is the same as comp letter, user wins
	// win counter increases
	// guess is recorded in "your guesses so far"
	if (userGuess == computerGuess){
			wins++;
			guessesLeft--;
			guessesSoFar++;

		// if letter is different than comp leter, user loses
		// loss counter increases
		// guess is recorded in "your guesses so far"
		} else {
			losses++;
			guessesLeft--;
			guessesSoFar++;
		}
	}
	// Taking the tallies and displaying them in HTML
		/*var html = "<h4>Wins: </h4>" +
		"<p> " + 
		wins + 
		"</p>" +
		"<h4>Losses: </h4>" + 
		"<p> " +
		losses + 
		"</p>" +
		"<h4>Guesses Left: </h4>" + 
		guessesLeft + 
		"</p>" +
		"<h4>Your guesses so far: </h4>" +
		"<p> " +
		guessesSoFar +
		"</p>";*/
//document.querySelector("#game").innerHTML = html;
	



// after all guesses are gone, restart game
