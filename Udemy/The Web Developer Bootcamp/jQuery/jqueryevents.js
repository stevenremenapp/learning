// $("h1").click(function() {
//   alert("h1 clicked!");
// });
//
// // $("button").click(function() {
// //   alert("button clicked!");
// // });
//
// $("button").click(function() {
//   $(this).css("background", "pink");
// });
//
// //see javascript character codes
// $("input").keypress(function(event) {
//   if(event.which === 13) {
//     alert("YOU PRESSED ENTER");
//   };
// });

//on jquery event listener

// $("h1").on("click", function() {
//   $(this).css("color", "purple");
// });
//
// $("input").on("keypress", function() {
//   console.log("KEYPRESS");
// });
//
// $("button").on("mouseenter", function() {
//   $(this).css("font-weight", "bold");
// });
//
// $("button").on("mouseleave", function() {
//   $(this).css("font-weight", "normal");
// });

//FADE EFFECTS

// $("button").on("click", function() {
//   $("div").fadeOut(1000, function() {
//     //console.log("Fade Completed!");
//     //$(this).remove();
//   });
// });

// $('button').on("click", function() {
//   // $('div').fadeIn(1000);
//   $('div').fadeToggle(1000);
// });

//SLIDE EFFECTS

$('button').on("click", function() {
  // $('div').slideDown();
  // $('div').slideUp();
  $('div').slideToggle(1000, function() {
    $(this).remove();
  });
});
