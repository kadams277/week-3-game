//created with hector after class

document.addEventListener("DOMContentLoaded", function () {

	//// create random words
	var words = ["giraffe", "hippo", "elephant"];

	//// pick random word
	// give us a random number between 0 and 1
	var random = Math.random();

	// give us an index for our array that will work
	// words an array - length property
	// between 0 and 3 with decimals
	var indexRandom = random * words.length;

	// an integer between 0-2
	var flooredNumber = Math.floor(indexRandom);

	// get our random word
	var randomWord = words[flooredNumber];

	// test our random word getter
	console.log(words[flooredNumber]);
	
	//// display underscores according to chosen word

	// generate an array with as many underscores as the length of our chosen word
	var uArr = [];

	for (var i = 0; i < randomWord.length; i++){
		uArr.push("_");
	}

	console.log(uArr);

	//// display our underscores

	// get element by id
	// document.getElementById("guessedWord");

	// more generic, get element by id or class...
	// like in css
	// # targets an id
	// . targets a class
	//   targets an element(tag)
	var element = document.querySelector("#guessedWord");
	//console.log(element);

	// var eHtml = element.innerHTML;
	// console.log(eHtml);

	element.innerHTML = uArr.join(" ");

	// listen for our key up event

	var guessedLetters = [];

	document.onkeyup = function (event) {
		// get our entered key
		var keyChar = event.keyCode;
		//console.log(keyChar);

		keyChar = String.fromCharCode(keyChar);
		//console.log(keyChar);

		keyChar = keyChar.toLowerCase(); 
		//console.log(keyChar);

		// see if that key matches any letter in our random word
		// Types: string, boolean, and number

		//check to see if guessed letter has already been guessed
		// check if user input is inside letters array
		var flag = false; 
	for (var i = 0; i < guessedLetters.length; i++){
		if (keyChar == guessedLetters[i]){
			flag = true;
			break;

		}
	}

		if (flag === false) {

		for (var i =0; i <randomWord.length; i++) {
			// compare input letter to current letter
			if (keyChar === randomWord.charAt(i)) {
				uArr[i] = keyChar;
				console.log("cgchgchg");
			} else {
		
			}
		}
			// push/add letter to our guessedLetters array
			// to-do only add not guessed letters, make sure they don't repeat, don't let them guess again
				guessedLetters.push(keyChar);

		console.log(uArr);
		document.querySelector("#guessedWord").innerHTML = uArr.join(" ");
		document.querySelector("#guessedLetters").innerHTML = guessedLetters.join(" ");
		}
	
};

});