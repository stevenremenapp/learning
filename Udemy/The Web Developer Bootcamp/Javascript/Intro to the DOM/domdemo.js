// var h1 = document.querySelector("h1");
//
// h1.style.color = "yellow";
// h1.style.border = "5px solid pink";

// var p = document.querySelector("p");

//add a class
// p.classList.add("big");

//can repeat to toggle between class on and off
// p.classList.toggle("big");

var p = document.getElementsByTagName("p")[0];
var ul = document.querySelector("ul");

//textContent will remove/overwrite all html tags in the text
//p.textContent;

//innerHTML will preserve the html tags (e.g. <strong> tags inside <p> tags)
//p.innerHTML;

//chaining textContent onto a selector statement
document.querySelector("h1").textContent = "END OF THIS LESSON";

//textContent treats whatever is entered as text only
//innerHTML renders html tags and presents them
//e.g. document.body.textContent = "<h1>Goodbye!</h1>";
//vs.
//document.body.innerHTML = "<h1>Goodbye</h1>";

// MANIPULATING ATTRIBUTES LECTURE NOTES&TEST

var img1 = document.getElementsByTagName("img")[0];
img1.setAttribute("src", "https://i0.wp.com/corgiguide.com/wp-content/uploads/2014/07/corgi_husky_mix_hybrid_breed.jpg");

var img2 = document.getElementsByTagName("img")[1];
img2.setAttribute("src", "https://img.buzzfeed.com/buzzfeed-static/static/2016-07/20/11/campaign_images/buzzfeed-prod-fastlane02/16-corgi-mixes-that-will-melt-your-cold-unloving--2-2759-1469026977-1_dblbig.jpg");

var a = document.querySelector("a");
a.setAttribute("href", "http://www.akc.org/dog-breeds/pembroke-welsh-corgi/");
a.textContent = "LINK TO CORGIS!";
