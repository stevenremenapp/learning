//Exercise - extend the functionality of a built in object

//#1
//Date object => to have new method .lastYear() which shows you last year 'YYYY' format.

new Date('1900-10-10').lastYear()
//'1899'

Date.prototype.lastYear = function() {
    return this.getFullYear() - 1;
  }

let lastYear = new Date('1900-10-10').lastYear();
console.log(lastYear);
let lastYear2 = new Date().lastYear();
console.log(lastYear2);


//#Bonus
// Modify .map() to print '🗺' at the end of each item.
console.log([1,2,3].map())
//1🗺, 2🗺, 3🗺

// USING MAP AS IS
[1,2,3].map(x => x + '🗺').join(', ');

// MODIFYING THE EXISTING PROTOTYPE METHOD
Array.prototype.map = function() {
    let array = [];
    for (let i = 0; i < this.length; i++) {
        array.push(this[i] + '🗺');
    }
    return array;
}

console.log([1,2,3].map());