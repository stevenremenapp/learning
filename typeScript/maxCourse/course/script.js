"use strict";
var myName = 'Steve'; // Implicit definition
var age; // Explicit definition
age = 31;
var hobbies = ["Running", "Reading"];
console.log(hobbies);
hobbies = [100];
console.log(hobbies);
//tuples
var address = ["Superstreet", 999];
//enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; // 101
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
//functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
//void function type does not return anything
function sayHello() {
    console.log("Hello!");
}
//argument types
function multiply(value1, value2) {
    return value1 * value2;
}
//function types
var myMultiply;
myMultiply = multiply;
console.log(myMultiply(5, 2));
//objects
var userData = {
    name: "Steve",
    age: 31
};
//complex object
var complex = {
    data: [100, 3.99, 19],
    output: function (argument) {
        return this.data;
    }
};
var complex2 = {
    data: [1, 2, 3],
    output: function (argument) {
        return this.data;
    }
};
//union types
var myRealAge = 31;
myRealAge = '31';
//check types
var finalValue = 23;
if (typeof finalValue == "number") {
    console.log("Final value is a number!");
}
//never
function neverReturns() {
    throw new Error('An error!');
}
//nullable types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canThisBeAny = null;
canThisBeAny = 12;
// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }
//     greet() {
//         return "Hello, " + this.greeting;
//     }
// }
// let greeter = new Greeter("world");
// let button = document.createElement('button');
// button.textContent = "Say Hello";
// button.onclick = function() {
//     alert(greeter.greet());
// }
// document.body.appendChild(button);
