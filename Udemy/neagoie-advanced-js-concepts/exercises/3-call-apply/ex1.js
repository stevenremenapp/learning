const array = [1, 2, 3];

function getMaxNumber(arr) {
    return Math.max.apply(null, arr);
}

getMaxNumber(array);


// call() and apply() can allow you to borrow methods and add parameters to those methods; call takes parameters as single arguments, apply accepts arrays