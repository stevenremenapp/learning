// new binding this
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person('Xavier', 55);

// implicit binding
const person = {
    name: 'Karen',
    age: 40,
    hi() {
        console.log('hi' + this.name)
    }
}

// explicit binding - using bind, call, or apply
const person3 = {
    name: 'Karen',
    age: 40,
    hi: function() {
        console.log('hi' + this.setTimeout)
    }.bind(window)
}

// arrow functions
const person4 = {
    name: 'Karen',
    age: 40,
    hi: function() {
        var inner = () => {
            // arrow functions are lexically scoped, so this takes this from its originating context, the person4 object; normal () {} functions are dynamically scoped and will cause this to be on the instantiated/called object, which in this case is the window object.
            console.log('hi' + this.name)
        }
        return inner;
    }
}