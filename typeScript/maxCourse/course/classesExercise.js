"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Exercise 1 - How was your TypeScript Class?
var Car = /** @class */ (function () {
    function Car(name) {
        var _this = this;
        this.acceleration = 0;
        this.honk = function () {
            console.log("Toooooooot!");
        };
        this.accelerate = function (speed) {
            _this.acceleration += speed;
        };
        this.name = name;
    }
    return Car;
}());
var car = new Car("BMW");
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
var baseObject = /** @class */ (function () {
    function baseObject() {
        this.width = 0;
        this.length = 0;
    }
    return baseObject;
}());
// var baseObject = {
//     width: 0,
//     length: 0
// };
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        // width:number = 10;
        // length:number = 2.5;
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.calcSize = function () {
            return _this.width * _this.length;
        };
        return _this;
    }
    return Rectangle;
}(baseObject));
// var rectangle = Object.create(baseObject);
// rectangle.width = 5;
// rectangle.length = 2;
// rectangle.calcSize = function() {
//     return this.width * this.length;
// };
var rectangle = new Rectangle();
// Can update values here or in the Rectangle class above
rectangle.width = 5;
rectangle.length = 10;
console.log(rectangle.calcSize());
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
// var person = {
//     _firstName: ""
// };
var newPerson = /** @class */ (function () {
    function newPerson() {
        this._firstName = "Steve";
    }
    Object.defineProperty(newPerson.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
            else {
                this._firstName = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    return newPerson;
}());
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
var newSteve = new newPerson();
console.log(newSteve.firstName);
newSteve.firstName = "Ma";
// Blank because it's not >3 letters
console.log(newSteve.firstName);
newSteve.firstName = "Maximilian";
console.log(newSteve.firstName);
