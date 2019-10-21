class Person {
    // properties public by default
    name: string;
    private type: string;
    protected age: number = 31;

    constructor(name: string, public username: string, type: string, age: number) {
        this.name = name;
        this.type = type;
        this.age = age;
    }

    printAge() {
        console.log(this.age);
        this.setType("Old guy");
    }

    private setType(type: string) {
        this.type = type;
        console.log(this.type);
    }
}

const person = new Person("Steve", "steve", "human", 31);
console.log(person);
person.printAge();
//Won't work with private method
//person.setType("Cool guy");

// Inheritance
class Steve extends Person {
    // name = "Steve Override";

    constructor(username: string, type: string, age: number) {
        super("Steve Override", username, type, age);
        this.age = 27;
    }
}

// Name passed to new Steve ("Test") is overridden by declared inheritance
const steve = new Steve("steve override", "human", 31);
console.log(steve);

//Getters & Setters
class Plant {
    // Assigning a default value prevents you from receiving No constructor/initialization error
    private _species: string = "Default!";

    get species() {
        return this._species;
    }

    set species(value: string) {
        if (value.length > 3) {
            this._species = value;
        } else {
            this._species = "Default";
        }
    }
}

let plant = new Plant();
console.log(plant.species);
plant.species = "Greenie";
console.log(plant.species);

// Static Properties & Methods
// Static keyword means you can always use this method without instantiating the class
class Helpers {
    static PI: number = 3.14;
    static calcCircumference(diameter: number): number {
        return this.PI * diameter;
    }
}
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(4));

// Abstract Classes -- can't instantiate; just here to be inherited from/extended
abstract class Project {
    projectName: string = "Default";
    budget: number = 1000;

    // Only define structure of function, not logic
    abstract changeName(name: string): void;

    calcBudget() {
        return this.budget * 2;
    }
}

class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project!");
console.log(newProject);

// Private Constructors
class OnlyOne {
    private static instance: OnlyOne;

    private constructor(public readonly name: string) {}

    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance= new OnlyOne("The Only One");
        }
        return OnlyOne.instance;
    }
}

// Constructor is private and cannot be run outside of the class
//let wrong = new OnlyOne("The Only One");
let right = OnlyOne.getInstance();
console.log(right);
console.log(right.name);
// Readonly property above cannot be changed
//right.name = "Something else";
console.log(right.name);