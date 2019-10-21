Promise.resolve('asyncfail')
    .then(response => {
        // console.log(response)
        // throw new Error('fail #1')
        // return response
        Promise.resolve().then(() => {
            throw new Error('fail #3')
            // without the following .catch you get an unhandled promise rejection because the other .catch is out of scope
        }).catch(console.log);
    })
    .then(response => {
        console.log(response)
    })
    // use .catch in async code, rather than try catch
    .catch(err => {
        // console.log(err)
        throw new Error('fail #2')
    })
    // response is undefined
    .then(response => {
        console.log(response)
    })
    .catch(err => {
        console.log('final error')
    })