// try catch is for SYNCHRONOUS code, it WILL NOT catch errors in async code

// You can nest try catch blocks to catch errors at each stage in the execution context

function fail() {
    try {
        console.loog('this works');
    }
    catch (error) {
        // also have error.name, error.stack, error.message
        console.log('error', error, error.stack);
    }
    finally {
        return 'a wild finally appears';
    }
}