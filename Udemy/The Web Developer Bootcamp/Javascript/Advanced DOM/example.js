var h1 = document.querySelector("h1");

// h1.addEventListener("click", function() {
//   alert("h1 was clicked!");
//   h1.style.background = "orange";
// });

// document.querySelector("ul").addEventListener("click", function(){
//   console.log("you clicked the ul!");
// });

var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++) {
  lis[i].addEventListener("click", function(){
    //inside of an event listener 'this' refers to the item that was called
    this.style.color = "pink";
  })
}

//YOU CAN ALSO PASS AN EVENT LISTENER A NAMED FUNCTION
//COLT PREFERS ANONYMOUS FUNCTION UNLESS THE FUNCTION WILL BE DUPLICATED ELSEWHERE
