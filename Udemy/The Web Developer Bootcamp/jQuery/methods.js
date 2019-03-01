// $("h1").text("New Text!!!");
//
// $("ul").html("<li>I hacked your UL!</li><li>Rusty is adorable");
//
// $("li").html("<a href='https://google.com'>CLICK ME TO GO TO GOOGLE</a>");

$('img').css("width", "200px");
// $('img').attr("src", "http://c8.alamy.com/comp/BE9G6M/geeuwende-boommarter-yawning-pine-marten-g-hnender-baummarter-BE9G6M.jpg");

// $('input').attr("type", "color");

$('img:first-of-type').attr("src", "http://c8.alamy.com/comp/BE9G6M/geeuwende-boommarter-yawning-pine-marten-g-hnender-baummarter-BE9G6M.jpg");
$("img").last().attr("src", "http://c8.alamy.com/comp/BE9G6M/geeuwende-boommarter-yawning-pine-marten-g-hnender-baummarter-BE9G6M.jpg");

$("input").val("Rusty Steele");

//will retrieve the value of the selected option
$("select").val();

$("h1").addClass("correct");
$("h1").removeClass("correct");

// $("li").addClass("wrong");

$("li").first().toggleClass("done");
$("li").toggleClass("done");
