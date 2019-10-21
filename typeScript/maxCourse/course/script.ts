let myName = 'Steve'; // Implicit definition
let age: number; // Explicit definition
age = 31;

let hobbies: any[] = ["Running", "Reading"];
console.log(hobbies);
hobbies = [100];
console.log(hobbies);

//tuples
let address: [string, number] = ["Superstreet", 999];

//enum
enum Color {
    Gray, // 0
    Green = 100, // 100 -- if num is specified, the count continues by adding one to the previous; can be reset if next item is set to 2
    Blue // 101
}

let myColor: Color = Color.Green;
console.log(myColor);

//functions
function returnMyName(): string {
    return myName;
}

console.log(returnMyName());

//void function type does not return anything
function sayHello(): void {
    console.log("Hello!");
}

//argument types
function multiply(value1: number, value2: number) {
    return value1 * value2;
}

//function types
let myMultiply: (val1: number, val2: number) => number;
myMultiply = multiply;
console.log(myMultiply(5, 2));

//objects
let userData: { name: string, age: number } = {
    name: "Steve",
    age: 31
};

//complex object
let complex: {data: number[], output: (argument: boolean) => number[]} = {
    data: [100, 3.99, 19],
    output: function (argument: boolean): number[] {
        console.log(argument);
        return this.data;
    }
};

//type alias - used to make a template for complex types/types to be reused
type Complex = {data: number[], output: (argument: boolean) => number[]};

let complex2: Complex = {
    data: [1, 2, 3],
    output: function (argument: boolean): number[] {
        console.log(argument);
        return this.data;
    }
};

//union types
let myRealAge: number | string = 31;
myRealAge = '31'

//check types
let finalValue = 23;
if (typeof finalValue == "number") {
    console.log("Final value is a number!");
}

//never
function neverReturns():never {
    throw new Error('An error!');
}

//nullable types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny: number | null = null;
canThisBeAny = 12;



// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }
//     greet() {
//         return "Hello, " + this.greeting;
//     }
// }

// let greeter = new Greeter("world");

// let button = document.createElement('button');
// button.textContent = "Say Hello";
// button.onclick = function() {
//     alert(greeter.greet());
// }

// document.body.appendChild(button);