// you can use a try catch block with async await, even though async await is just Promises!

(async function() {
    try {
        await Promise.reject('error')
    }
    catch (err) {
        console.log(err)
    }
    console.log('is this still good?')
})()