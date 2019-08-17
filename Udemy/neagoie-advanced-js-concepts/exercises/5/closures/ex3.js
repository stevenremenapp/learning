// var in for loop creates global scope, which causes all index 4 to return; let in for loop creates block scope, which causes indices to return as expected

const array = [1,2,3,4];
for (let i = 0; i < array.length; i++) {
    setTimeout(function() {
        console.log(`I am at index ${i}`);
    }, 3000);
}


// using closures and var

const array = [1,2,3,4];
for (var i = 0; i < array.length; i++) {
    (function(closureI) {
        setTimeout(function() {
            console.log(`I am at index ${array[closureI]}`);
        }, 3000);
    })(i);
}