//create secret number
var secretNumber = 4;

//ask user for guess
var guess = Number(prompt("Guess a number"));

//check if guess is right
if(guess === secretNumber) {
  alert("YOU ARE CORRECT!");
}
//otherwise check if higher
else if(guess > secretNumber) {
  alert("Your number is too high, guess again.");
}
//otherwise check if lower
else {
  alert("Your number is too low, guess again.");
};
