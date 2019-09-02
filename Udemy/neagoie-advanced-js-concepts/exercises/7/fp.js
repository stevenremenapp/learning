// PURE FUNCTIONS
// no side effects
// given same input return the same output

// this causes side effects and doesn't return the same output... it modifies const array and returns different output based on state of array
const array = [1,2,3];
function mutateArray(arr) {
    arr.pop()
}
function mutateArray2(arr) {
    arr.forEach(item => {
        arr.push(1);
    })
}

mutateArray(array);
mutateArray2(array);
console.log(array);

// changed so that it is a pure function

function removeLastItem(arr) {
    const newArray = [].concat(arr);
    newArray.pop();
    return newArray;
}

function multiplyBy2(arr) {
    return arr.map(item => item * 2);
}

removeLastItem(array);
mutateArray2(array);
console.log(array);

// Idempotence: when a function will always return the same output, but with a twist from the discussion about pure functions. That twist is that a function can be idempotent but not pure because the function may interact with the outside world, but still return the same thing. Eg. API calls to get info or delete a user, Math.abs(Math.abs(Math.abs(-50))) will always return 50.

// Immutability: do not change any initial data; create a copy and act on/return that copy.

// Higher order functions take one or more functions as arguments or returns a function (callback) as a result
const hof = () => () => 5;
hof()();
const hof2 = (fn) => fn(5);
hof(function a(x) {return 5});

// Closures are mechanisms for enclosing some kind of state. Closure is created whenever a function acts as a variable defined outside of the immediate/parent function scope. Help create private data and methods.
const closure = function() {
    let count = 0;
    return function increment() {
        count++;
        return count;
    }
}
closure();
const incrementFunc = closure();
incrementFunc();

// Currying is the technique of translating the evaluation of a function that takes multiple arguments into evaluating a sequence of functions each with a single argument. Take a function that takes multiple parameters, and instead modify it into a function that takes one parameter at a time.
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(5)(3); // Equals 15; Function gets one parameter at a time
// Why is this useful??? We can create multiple utility functions out of this.
const curriedMultiplyBy5 = curriedMultiply(5);
curriedMultiplyBy5(4); // equals 20

// Partial Application -- Way to partially apply a function; it's a process of producing a function with a smaller number of parameters. It means applying some parameters of the function and then using closures to apply the rest of the arguments. Expects all arguments on second call of function.
const multiply = (a, b, c) => a * b * c;
const partialMultiplyBy5 = multiply.bind(null, 5);
partialMultiplyBy5(4, 10);

// Memoization is a specific form of caching that involves caching the return value of a function based on its parameters. If the parameter doesn't change it returns the memoized/cached version that it has calculated before. If it hasn't seen that value it will calculate the return value and add it to the cache along with the parameter.
function addTo80(n) {
    // What if this function took a long time to complete? How can we optimize this to keep from running every single time? Memoization!
    return n + 80;
}
addTo80(5);

function memoizedAddTo80() {
    // to keep the cache from being reset to an empty object with every call we use closures by placing it in the function/out of global scope and placing the logic in a return function
    let cache = {
        // for example, this would read after receiving a parameter of 5
        // 5: 85,
    };
    return function(n) {
        if (n in cache) {
            return cache[n];
        } else {
            // this calculation take a long time, but only runs once
            console.log('long time');
            cache[n] = n + 80;
            return cache[n];
        }
    }
}

const memoized = memoizedAddTo80();
// From the second refactored version, with closures... this first one will take a while
console.log('1', memoized(5));
// This will be quicker
console.log('2', memoized(5));

// From the first version, without closures... this first one will take a while
console.log('1', memoizedAddTo80(5));
// This will be quicker
console.log('2', memoizedAddTo80(5));

// Composition is the idea that any data transformation that we do should be obvious -- somewhat like a conveyor belt/assembly line. This is a system design principle for communication between components.
const compose = (f, g) => (data) => f(g(data));
const multiplyBy3 = (num) => num * 3;
const makePositive = (num) => Math.abs(num);
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive);
multiplyBy3AndAbsolute(-50);

// Pipe -- same thing as composition, but it goes right to left instead of left to right. Compare compose function above with pipe function below.
const pipe = (f, g) => (data) => g(f(data));

// Arity -- the number of arguments a function takes. In functional programming the general principle is that the few parameters a function has the cleaner it is. It makes it easier to curry or compose functions.