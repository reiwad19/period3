var reimon = {
 name: "Reimon",
 age: 16,
 grade: 11,
 friends: ["Will", "Hana", "Max", "Dean", "Kenneth"],
};
var will = {
 name: "Will",
 age: 15,
 grade: 10,
 friends: ["Andrew", "Will"],
};
var hana = {
 name: "Hana",
 age: 16,
 grade: 11,
 friends: ["Kyra", "Naya", "Princess", "Hailey", "Skyler","Fumie"],
};
var x =[reimon, will, hana];
window.alert(x[1].friends[0]);
/* Will is 1 on variable x. then the code goes to friends on will. 0 is 1 so window alert shows andrew */