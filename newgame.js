// made a object called matthew
//matthew likes NBA
var matthew = {
	game: "NBA",
  age : 16,
  grade: 12,
}
//asked user for a new game to input
var newGame = prompt("new game?");
//called matthew.game and changed it to the input "newGame"
matthew.game = newGame;
//display new matthew.game to window
window.alert(matthew.game);