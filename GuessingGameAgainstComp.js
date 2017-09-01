var playerOne = Math.floor(Math.random() * 6 + 1);


	var playerTwo = prompt("Guess a number between 1-6");
  if (playerOne == playerTwo) {
  window.alert("You Win!");
  }
  else {
  window.alert("Player one answer was " + playerOne);
  window.alert("You chose " + playerTwo);
  }