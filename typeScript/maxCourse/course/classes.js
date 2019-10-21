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
var Person = /** @class */ (function () {
    function Person(name, username, type, age) {
        this.username = username;
        this.age = 31;
        this.name = name;
        this.type = type;
        this.age = age;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType("Old guy");
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("Steve", "steve", "human", 31);
console.log(person);
person.printAge();
//Won't work with private method
//person.setType("Cool guy");
// Inheritance
var Steve = /** @class */ (function (_super) {
    __extends(Steve, _super);
    // name = "Steve Override";
    function Steve(username, type, age) {
        var _this = _super.call(this, "Steve Override", username, type, age) || this;
        _this.age = 27;
        return _this;
    }
    return Steve;
}(Person));
// Name passed to new Steve ("Test") is overridden by declared inheritance
var steve = new Steve("steve override", "human", 31);
console.log(steve);
//Getters & Setters
var Plant = /** @class */ (function () {
    function Plant() {
        // Assigning a default value prevents you from receiving No constructor/initialization error
        this._species = "Default!";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "Greenie";
console.log(plant.species);
// Static Properties & Methods
// Static keyword means you can always use this method without instantiating the class
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(4));
// Abstract Classes -- can't instantiate; just here to be inherited from/extended
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default";
        this.budget = 1000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project!");
console.log(newProject);
// Private Constructors
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne("The Only One");
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
// Constructor is private and cannot be run outside of the class
//let wrong = new OnlyOne("The Only One");
var right = OnlyOne.getInstance();
console.log(right);
console.log(right.name);
// Readonly property above cannot be changed
//right.name = "Something else";
console.log(right.name);
