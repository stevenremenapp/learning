const fs = require('fs');

fs.readFile('./advent-starter-file.txt', (err, data) => {
    console.time('floor');
    if (err) {
        console.log(err);
    }
    let dataString = data.toString();
    let dataArray = dataString.split('');
    console.log(dataString.length);
    // let floorCount = 0;
    // for (let i = 0; i < dataString.length; i++) {
    //     if (dataString[i] === '(') {
    //         floorCount += 1;
    //     }
    //     if(dataString[i] === ')') {
    //         floorCount -= 1;
    //     }
    // }
    const floorCount = dataArray.reduce((acc, currentValue) => {
        if (currentValue === '(') {
            return acc += 1;
        }
        else if (currentValue === ')') {
            return acc -= 1;
        }
    }, 0);
    console.log(floorCount);
    console.timeEnd('floor');
})