var user1 = {name : "nerd", org: "dev"};
var user2 = {name : "nerd", org: "dev"};
var eqFalse = user1 == user2;
alert(eqFalse); // gives false

var eqTrue = JSON.stringify(user1) == JSON.stringify(user2);
alert(eqTrue); // gives true