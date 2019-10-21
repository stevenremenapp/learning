// Exercise 1 - How was your TypeScript Class?
class Car {
    name: string;
    acceleration: number = 0;

    honk = ():void => {
        console.log("Toooooooot!");
    }

    accelerate = (speed:number):void => {
        this.acceleration += speed;
    }

    constructor(name: string) {
        this.name = name;
    }
}

let car = new Car("BMW");
console.log(car);
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// function Car(name) {
//     this.name = name;
//     this.acceleration = 0;

//     this.honk = function() {
//         console.log("Toooooooooot!");
//     };

//     this.accelerate = function(speed) {
//         this.acceleration = this.acceleration + speed;
//     }
// }
// var car = new Car("BMW");
// car.honk();
// console.log(car.acceleration);
// car.accelerate(10);
// console.log(car.acceleration);

// Exercise 2 - Two objects, based on each other ...

class baseObject {
    width:number = 0;
    length:number = 0;
}

// var baseObject = {
//     width: 0,
//     length: 0
// };

class Rectangle extends baseObject {
    // width:number = 10;
    // length:number = 2.5;

    calcSize = ():number => {
        return this.width * this.length;
    }
}

// var rectangle = Object.create(baseObject);
// rectangle.width = 5;
// rectangle.length = 2;
// rectangle.calcSize = function() {
//     return this.width * this.length;
// };
let rectangle = new Rectangle();
// Can update values here or in the Rectangle class above
rectangle.width = 5;
rectangle.length = 10;
console.log(rectangle.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
// var person = {
//     _firstName: ""
// };

class newPerson {
    private _firstName: string = "Steve";

    get firstName():string {
        return this._firstName;
    }

    set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        } else {
            this._firstName = "";
        }
    }
}

// Object.defineProperty(person, "firstName", {
//     get: function () {
//         return this._firstName;
//     },
//     set: function (value) {
//         if (value.length > 3) {
//             this._firstName = value;
//         }
//         else {
//             this._firstName = "";
//         }
//     },
//     enumerable: true,
//     configurable: true
// });

let newSteve = new newPerson();

console.log(newSteve.firstName);
newSteve.firstName = "Ma";
// Blank because it's not >3 letters
console.log(newSteve.firstName);
newSteve.firstName = "Maximilian";
console.log(newSteve.firstName);