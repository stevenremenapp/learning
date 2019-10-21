// Check off specific todos by clicking

$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//Click on X to delete todo

$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

//Press enter key to add to do to list

$("input[type='text']").keypress(function(event) {
    if(event.which === 13) {
      //grabbing new todo text from input
      var todoText = $(this).val();
      //clear out inout
      $(this).val("");
      //create a new li and add to ul + include the span tag
      $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    };
});

//add toggle functionality to the plus sign
$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle();
});
