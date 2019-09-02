const elf = {
    name: 'Orwell',
    weapon: 'bow',
    attack() {
        return `attack with ${elf.weapon}`
    }
}

elf.attack();

// factory functions

function createElf(name, weapon) {
    return {
        name,
        weapon,
        attack() {
            return `attack with ${weapon}`
        }
    }
}

const peter = createElf('Peter', 'stones');
peter.attack();
const sam = createElf('Sam', 'fire');
sam.attack();

// Object.create() -- store commonly used functions in a separate object so it doesn't take up an unnecessary amount of memory because we really only need it once; create elf object from two different objects

const elfFunctionStore = {
    attack() {
        return `attack with ${this.weapon}`
    }
}


function createElf(name, weapon) {
    let newElf = Object.create(elfFunctionStore);
    newElf.name = name;
    newElf.weapon = weapon;
    return newElf;
}

const peter = createElf('Peter', 'stones');
peter.attack();
const sam = createElf('Sam', 'fire');
sam.attack();

// constructor functions -- use the new keyword to construct an elf using the constructor function; this is the only way to add properties

// be careful about what this is calling when using constructor functions and prototype methods!

function Elf(name, weapon) {
    console.log('this', this)
    this.name = name;
    this.weapon = weapon;
    console.log('this', this)
}

// only functions, NOT objects, have access to the prototype

Elf.prototype.attack = function() {
    return `attack with ${this.weapon}`
}

Elf.prototype.build = function() {
    // You have to use this as a variable because it will not be in the right scope if using this.name
    const self = this;
    function building() {
        return self.name + ' builds a house'
    }
    return building()
}

const peter = new Elf('Peter', 'stones');
const sam = new Elf('Sam', 'fire');
peter.build();

// using es6 classes -- syntactic sugar for the above processes/for prototypal inheritance

class Elf {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    // methods are added outside the constructor because they do not need to be run with every instantiation
    attack() {
        return `attach with ${this.weapon}`
    }
    build() {
        return `${this.name} builds a house`
    }
}

const peter = new Elf('Peter', 'stones');
const sam = new Elf('Sam', 'fire');
console.log(peter instanceof Elf);

// expanding program using inheritance

const fiona = new Elf('Fiona', 'kindness');
const ogre = {...fiona}
// fiona has Elf as the base class, but ogre has been cloned so that its prototype is an empty object; the prototypal inheritance chain is lost in cloning.
fiona.__proto__
ogre.__proto__

// starting fresh with our inheritance
class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return `attack with ${this.weapon}`
    }
}

// subclassing -- subclass (Elf) inherits from the base/superclass (Character)
class Elf extends Character {
    // constructor is for the Elf class specifically
    constructor(name, weapon, type) {
        // super tells any Elf instances to look up the prototype chain if it doesn't find what it needs -- in this case, that would be name, weapon, and attack
        // this cannot be determined in a subclass without super being called; e.g. running console.log(this) before super will cause an error
        super(name, weapon);
        this.type = type
    }
    attack(cry) {
        return `attack with ${cry}`
    }
}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }
    attack() {
        return 'arrrgghhh!'
    }
    makeFort() {
        return `strongest fort ever, made by ${this.name}`
    }
}

const dolby = new Elf('Dolby', 'cloth', 'house');
const fiona = new Ogre('Fiona', 'kindness', 'green');
fiona.makeFort();

// true
console.log(Ogre.prototype.isPrototypeOf(shrek));
console.log(Character.prototype.isPrototypeOf(Ogre.prototype));

// better way to check the above, using instanceOf
console.log(dolby instanceof Elf);
console.log(dolby instanceof Character);

// polymorphism!!! --- the ability to change the behavior of methods based on the instance that is calling it, for example, how the attack methods change above --- method overwriting or method overloading are options here
dolby.attack('weee');
fiona.attack();