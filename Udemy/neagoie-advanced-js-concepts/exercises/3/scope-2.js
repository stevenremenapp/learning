// this for a() and b() is window, for c this is c
const a = function() {
    console.log('a', this);
    const b = function() {
        console.log('b', this);
        const c = {
            hi() {
                console.log('c', this);
            }
        }
        c.hi();
    }
    b();
}
a();


// first this returns obj, second this returns window. this is not lexically scoped (it is dynamically scoped!), so sing() is actually calling anotherFunc(), not obj, thus making window the this for anotherFunc

const obj = {
    name: 'Billy',
    sing() {
        console.log('a', this);
        var anotherFunc = function() {
            console.log('b', this);
        }
        anotherFunc();
    }
}

// to solve this common issue you can use arrow functions, which are lexically scoped

const obj = {
    name: 'Billy',
    sing() {
        console.log('a', this);
        var anotherFunc = () => {
            console.log('b', this);
        }
        anotherFunc();
    }
}

// before arrow functions you had to bind this
// instead of running obj.sing() like the previous examples, you have to run obj.sing()() to return this for b

const obj = {
    name: 'Billy',
    sing() {
        console.log('a', this);
        var anotherFunc = function() {
            console.log('b', this);
        }
        return anotherFunc.bind(this);
    }
}