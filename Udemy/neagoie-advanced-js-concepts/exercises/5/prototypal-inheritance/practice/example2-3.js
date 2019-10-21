let dragon = {
    name: 'Tanya',
    fire: true,
    fight() {
        return 5
    },
    // wrapping sing in if check for fire prevents lizard from borrowing it because it does not have fire set to true/fire at all
    sing() {
        if (this.fire) {
            return `I am ${this.name}, the breather of fire`
        }
    }
}

let lizard = {
    name: 'Kiki',
    fight() {
        return 1
    }
}

let lizardSing = dragon.sing.bind(lizard);
/// assigning it to a variable will not work
let lizardSing2 = dragon.sing.call(lizard);
/// but this does:
dragon.sing.call(lizard);


// ALLOW LIZARD TO INHERIT ALL PROPERTIES FROM DRAGON -- IF LIZARD HAS ANY OF THE SAME PROPERTIES THEY OVERRIDE THE INHERITED PROPERTIES

// NEVER USE __PROTO__ BECAUSE IT'S BAD FOR PERFORMANCE AND MESSES WITH THE JS COMPILER
lizard.__proto__ = dragon;
lizard.isPrototypeOf(dragon); // true

for (let prop in lizard) {
    if (lizard.hasOwnProperty(prop)) {
        console.log(prop);
    }
}