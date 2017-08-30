var bankAccount1 = {};
bankAccount1["name"] = "Tony";
bankAccount1["balance"] = 1000000;
var withdrawl = prompt("How much would you like to deposit?");
var force = parseInt(withdrawl);
//force the numerical string into an integer which then can be added to balance
window.alert(bankAccount1.balance + force);
//the integer from force is being added to the bankAccount1