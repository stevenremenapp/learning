var movies = [
  {
    title: "In Bruges",
    hasWatched: true,
    rating: "5 stars"
  },
  {
    title: "Hacksaw Ridge",
    hasWatched: false,
    rating: "5 stars"
  },
  {
    title: "Moonlight",
    hasWatched: false,
    rating: "5 stars"
  },
  {
    title: "That's My Boy",
    hasWatched: true,
    rating: "4.5 stars"
  },
  {
    title: "Get Out",
    hasWatched: true,
    rating: "5 stars"
  }
];

// You have watched "In Bruges" - 5 stars
// You have not seen "Frozen" - 4.5 stars

// movies.forEach(function(report) {
//   if(movies.hasWatched == true) {
//     console.log("You have watched " + movies.title + " - " + movies.rating);
//   } else {
//     console.log("You have not seen " + movies.title + " - " + movies.rating);
//   }
// });

// function report(movies) {
// for (var i = 0; i < movies.length; i++) {
//   for (var j = 0; j < movies[i].length; j++) {
//     if (movies.hasWatched === true) {
//       console.log("You have watched " + movies.title + " - " + movies.rating)
//     } else {
//       console.log("You have not seen " + movies.title + " - " + movies.rating)
//     }
//   }
// }
// };


//GOOD!!!
// for(var i = 0; i < movies.length; i++) {
//   if (movies[i].hasWatched === true) {
//     document.write("You have watched " + movies[i].title + " - " + movies[i].rating + "<br>");
//     console.log("You have watched " + movies[i].title + " - " + movies[i].rating);
//   } else {
//     document.write("You have not seen " + movies[i].title + " - " + movies[i].rating + "<br>");
//     console.log("You have not seen " + movies[i].title + " - " + movies[i].rating);
//   }
// };

//forEach attempt
// movies.forEach(function(x) {
//   if(x.hasWatched === true) {
//     document.write("You have watched " + x.title + " - " + x.rating + "<br>");
//     console.log("You have watched " + x.title + " - " + x.rating);
//   } else {
//     document.write("You have not seen " + x.title + " - " + x.rating + "<br>");
//     console.log("You have not seen " + x.title + " - " + x.rating);
//   }
// });



//COLT'S SOLUTION

// movies.forEach(function(movie) {
//   var result = "You have ";
//   if(movie.hasWatched) {
//     result += "watched ";
//   } else {
//     result += "not seen ";
//   }
//   result += "\"" + movie.title + "\" - ";
//   result += movie.rating;
//   console.log(result);
// })

//FUNCTION SOLUTION
function buildString(movie) {
  var result = "You have ";
  if(movie.hasWatched) {
    result += "watched ";
  } else {
    result += "not seen ";
  }
  result += "\"" + movie.title + "\" - ";
  result += movie.rating;
  return result;
};

movies.forEach(function(movie) {
  console.log(buildString(movie));
});
