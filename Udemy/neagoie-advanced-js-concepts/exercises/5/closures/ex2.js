// use closures to prevent log from running every time function is called

// ORIGINAL
let view;
function initialize() {
    view = '⛰️';
    console.log('view has been set!');
}

initialize();
initialize();
initialize();
console.log(view);

// MY FAILED SOLUTION
const view = {
    view: '⛰️',
    successMessage: 'view has been set!',
    initialize() {console.log(this.successMessage)}
}

view.initialize();
view.initialize();
view.initialize();
console.log(view.view);


// YOU CAN SET A FLAG TO CHECK ON CALLS, I DIDN'T THINK YOU COULD!
let view;
function initialize() {
    let called = 0;
    return function() {
        if (called > 0) {
            return;
        } else {
            view = '⛰️';
            console.log('view has been set!');
            called += 1;
        }
    }
}

let startOnce = initialize();
startOnce();
startOnce();
startOnce();
console.log(view);