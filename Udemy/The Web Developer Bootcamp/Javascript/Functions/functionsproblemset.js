// function isEven(num) {
//   if(num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// COLT ANSWER
// % RETURNS A BOOLEAN VALUE SO NO NEED FOR IF ELSE TO RETURN BOOLEAN. RETURNING THE % DOES THAT IN THE COMPUTATION
function isEven(num) {
  return num % 2 === 0;
};

//MY ANSWER

// function factorial(num) {
//   if(num < 0) {
//     return "Without gamma a negative number has no factorial... and I'm all out of gamma!";
//   } else if(num === 0) {
//     return 1;
//   } else {
//     return (num * factorial(num - 1));
//   }
// };

//COLT ANSWER

function factorial(num) {
  var result = 1;
  for(var i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

function kebabToSnake(str) {
  return str.replace(/-/g, '_');
};

//COLT ANSWER

// function kebabToSnake(str) {
//   var newStr = return str.replace(/-/g, "_");
//   return newStr;
// };
