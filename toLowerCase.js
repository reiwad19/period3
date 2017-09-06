//object called stem2
var stem2 = {
  classroom: "f103",
  students: 12,
};
//ask user to enter either classroom or students
var x = prompt("classroom or students");
//toLowerCase() changes all input into lowercase
var lowerCase = x.toLowerCase();
//if else statement. === is strict equals
if ((lowerCase === "classroom") || (lowerCase === "students")) {
//lowerCase is the lowercased user input
  window.alert(stem2[lowerCase])
}
//if the user enters anything else then "you did not pay attention", then
//you have to try again. goes to function tryAgain
else {
  window.alert("You did not pay attention");
  tryAgain();
}
//function runs when is called upon.
function tryAgain() {
	var x = prompt("classroom or students");
var lowerCase = x.toLowerCase();
if ((lowerCase === "classroom") || (lowerCase === "students")) {
  window.alert(stem2[lowerCase])
}
else {
  window.alert("You did not pay attention");
  tryAgain();
}
}