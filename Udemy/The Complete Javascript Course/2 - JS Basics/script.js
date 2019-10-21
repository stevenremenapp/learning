// Lecture: variables
/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/


//Lecture: variable mutation and type coercion
/*
var name = 'John';
var age = 26;
console.log(name + ' ' + age);

var job, isMarried;

console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

age = 'thirty six';
job = 'plumber';
console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

var lastName = prompt('What is the last name?');
console.log(lastName);
alert(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');
*/


// Lecture: operators

/*var now = 2018;
var birthYear = now - 30;

birthYear = now - 26 * 2;
console.log(birthYear);

var ageJohn = 33;
var ageMark = 33;

ageJohn = ageMark = (3 + 5) * 4 - 6;
//ageJohn = ageMark = 26;
//ageJohn = 26;

ageJohn++;
ageMark *= 2;

console.log(ageJohn);
console.log(ageMark);
*/


//Lecture: if/else statements
/*
var name = 'John';
var age = 26;
var isMarried = 'yes';

if (isMarried === 'yes') {
  console.log(name + ' is married!');
} else {
  console.log(name + ' will hopefully marry soon.');
}

isMarried = false;

// okay to only have an if

if (isMarried) {
  console.log('YES!');
} else {
  console.log('NO!');
}

// TYPE COERCION WITH DOUBLE EQUALS
if (23 == '23') {
  console.log('Something to print...');
}

// NO TYPE COERCION WITH TRIPLE EQUALS
if (23 === '23') {
  console.log('Something to print...');
}
*/


//Lecture: Boolean logic and switch statements
/*
var age = 25;
age = 24;

if (age < 20) {
  console.log("John is a teenager");
} else if (age > 20 && age < 30) {
  console.log("John is a young man");
} else {
  console.log("John is a man");
}

var job = 'cop';

job = prompt('What does John do?');

switch (job) {
  case 'teacher':
    console.log('John teaches.');
    break;
  case 'driver':
    console.log('John drives.');
    break;
  case 'cop':
    console.log('John cops.');
    break;
  default:
    console.log("John doesn't.");
}
*/


// Lecture: Coding Challenge

//MY SOLUTION
/*
let friend1Height = Number(prompt("What is person 1's height in centimeters?"));
let friend1Age = Number(prompt("What is person 1's age?"));
let friend2Height = Number(prompt("What is person 2's height in centimeters?"));
let friend2Age = Number(prompt("What is person 2's age?"));
let friend3Height = Number(prompt("What is person 3's height in centimeters?"));
let friend3Age = Number(prompt("What is person 3's age?"));

let friend1Score = Number(friend1Height + (5 * friend1Age));
let friend2Score = Number(friend2Height + (5 * friend2Age));
let friend3Score = Number(friend3Height + (5 * friend3Age));

// if (friend1Score > friend2Score) {
//   console.log("Friend 1 wins with a score of " + friend1Score);
// } else if (friend2Score > friend1Score) {
//   console.log("Friend 2 wins with a score of " + friend2Score);
// } else {
//   console.log("It was a draw!");
// }

if (friend1Score > friend2Score && friend1Score > friend3Score) {
  console.log("Friend 1 wins with a score of " + friend1Score);
} else if (friend2Score > friend1Score && friend2Score > friend3Score) {
  console.log("Friend 2 wins with a score of " + friend2Score);
} else if (friend3Score > friend1Score && friend3Score > friend2Score) {
  console.log("Friend 3 wins with a score of " + friend3Score);
} else {
  console.log("It was somehow a three-way draw!");
}
*/

//JONAS SOLUTION

var heightJohn = 172;
var heightMike = 165;
var ageJohn = 26;
var ageMike = 29;

var scoreJohn = heightJohn + 5 * ageJohn;
var scoreMike = heightMike + 5 * ageMike;

// if (scoreJohn > scoreMike) {
//   console.log('John wins the game with ' + scoreJohn + ' points!');
// } else if (scoreMike > scoreJohn) {
//   console.log('Mike wins the game with ' + scoreMike + ' points!');
// } else if (scoreMike === scoreMike) {
//   console.log('There is a draw!');
// }

var heightMary = 158;
var ageMary = 31;
var scoreMary = heightMary + 5 * ageMary;

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
  console.log('John wins the game with ' + scoreJohn + ' points!');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
  console.log('Mike wins the game with ' + scoreMike + ' points!');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
  console.log('Mary wins the game with ' + scoreMary + ' points!')
} else {
  console.log('It\'s a draw!');
}
