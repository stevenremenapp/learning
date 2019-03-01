const script2 = require('./script2');

const a = script2.largeNum;
const b = 6;

setTimeout(() => {
    console.log(a+b);
}, 3000);

console.log(a+b);

console.log(__dirname);