//Four different ways to select the first <p> tag

//Use bracket 0 to target the first p

var firstp = document.querySelector("#first");

var firstptwo = document.getElementById("first");

var firstpthree = document.getElementsByClassName("special")[0];

var firstpfour = document.getElementsByTagName("p")[0];

var firstpfive = document.querySelectorAll("p")[0];

var firstpsix = document.querySelector(".special");

var firstpseven = document.querySelector("h1 + p");
