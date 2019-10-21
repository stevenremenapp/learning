//works if put into console

$("h1").css("color", "yellow");

var styles = {
  color: "red",
  background: "pink",
  border: "2px solid purple"
};

$("h1").css(styles);

$("li").css("color", "blue");

$("a").css("font-size", "40px");

$("li").css({
  fontSize: "10px",
  border: "3px dashed purple",
  background: "rgba(100, 100, 100, 0.75)"
});
