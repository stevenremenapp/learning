// var button = document.querySelector("button");
//
// button.addEventListener("click", function() {
//   if(document.body.style.backgroundColor === "purple") {
//     document.body.style.backgroundColor = "";
//   } else {
//     document.body.style.backgroundColor = "purple";
//   }
// });

//COLT'S SOLUTION

// var button = document.querySelector("button");
// var isPurple = false;
//
// button.addEventListener("click", function() {
//   if(isPurple) {
//     document.body.style.background = "white";
//   } else {
//     document.body.style.background = "purple";
//   }
//   isPurple = !isPurple;
// });

//COLT'S BETTER SOLUTION, it adds CSS to html file

var button = document.querySelector("button");

button.addEventListener("click", function() {
  document.body.classList.toggle("purple");
});
