let human = {
    mortal: true
}

let socrates = Object.create(human);
socrates.age = 70;
console.log(socrates);
console.log(human.isPrototypeOf(socrates));