// when something is constructed an object is created, so a is an object, whereas b is a number because it is a variable that has been assigned

var a = new Number(5);
typeof a;

// when you assign a variable you still have access to methods on the type of variable it is because under the hood JS constructs the number variable so that you have access to the object methods -- for example, new Date()

// in JS everything -- with the exception of null and undefined -- is an object, so we then have access to methods depending on the type of item created

var b = 5;
typeof b;

// type coercion causes the strict equality to be false, but the loose equality to be true

a === b;
a == b;