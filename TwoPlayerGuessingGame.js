//ask the user for a number between 1-6
//ask the other user for a number between 1-6
//if the second players number equals the first players number, tell them they won!
//if the second players number does not equal, tell them they lose
var playerOne = prompt("Enter a number between 1-6");
if ((playerOne < 1) || (playerOne > 6) || isNaN(playerOne)) {
	window.alert("You cannot follow directions");
}
else {
	var playerTwo = prompt("Guess a number between 1-6");
  if (playerOne == playerTwo) {
  window.alert("You Win!");
  }
  else {
  window.alert("Player one answer was " + playerOne);
  window.alert("You chose " + playerTwo);
  }
}