function sing() {
  console.log("twinkle twinkle...");
  console.log("how i wonder...");
}

// setInterval(sing, 1000);
// clearInterval(2);


//setting an anonymous function
setInterval(function() {
  console.log("I am an anonymous function!");
  console.log("This is awesome!");
}, 2000);
