var stem2 = {
  classroom: "f103",
  students: 12,
};
var x = prompt("classroom or students");
var lowerCase = x.toLowerCase();
if ((lowerCase === "classroom") || (lowerCase === "students")) {
  window.alert(stem2[lowerCase])
}