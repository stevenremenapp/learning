var obj = {
  name: "Chuck",
  age: 45,
  isCool: false,
  friends: ["Bob", "Tina"],
  add: function(x,y) {
    return x + y;
  }
}

//To call the add method
// obj.add(10,5);

var comments = [];

comments.data = [
  "Good job!",
  "Bye!",
  "Lame..."
];

comments.print = function() {
  this.data.forEach(function(el) {
    console.log(el);
  });
};

comments.print();
