var todos = ["Buy new turtle"];

var input = prompt("What would you like to do?");



while(input !== "quit") {
  //handle input
  if(input === "list") {
    listTodos();
  } else if(input === "new") {
    addTodo();
  } else if(input === "delete") {
    deleteTodo();
  }
  //ask again for new input
input = prompt("What would you like to do?");
}
console.log("Okay, you quit the app");

//refactoring the original long while statements
//making if statements into their own functions

function listTodos() {
  console.log("**********");
  todos.forEach(function(todo, index) {
    console.log(index + ": " + todo);
});
  console.log("**********");
};

function addTodo() {
  //ask for new todos
  var newTodo = prompt("Enter new todo");
  //add to todos array
  todos.push(newTodo);
  console.log("Added todo!");
};

function deleteTodo() {
  //ask for index of todo to be deleted
  var index = prompt("Enter index of todo to delete");
  //use splice to delete that todo
  todos.splice(index, 1);
  console.log("Deleted todo!");
};
