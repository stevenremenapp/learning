function printReverse() {
  var reverse = array.reverse();
  array.forEach(function(element) {
    console.log(element);
  });
};

function isUniform(array) {
  var firstElement = array[0];
  for(var i = 1; i < array.length; i++) {
    if(array[i] !== firstElement) {
      return false;
    }
    }
    return true;
};

function sumArray() {
  var sum = array.reduce(function (a, b) {
    return a + b;
  }, 0);
  return sum;
};

function max() {
  //new spread operator in ES6
  return Math.max(...array);
};
