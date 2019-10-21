// IIFE assigned to var, allows private variables while giving access to the fight function by adding it as a returned property
// Module pattern minimizes global vars, but still has some as module names

// CommonJS allows you to use the module pattern without using IIFEs, much in the way we use import, require, and modules in Node

// browserify and webpack bundle your scripts and output a bundle with all your js scripts in a way that takes care of your dependencies

var fightModule = (function() {
    var harry = 'potter';
    var voldemort = 'He who must not be named';

    function fight(char1, char2) {
        var attack1 = Math.floor(Math.random() * char1.length);
        var attack2 = Math.floor(Math.random() * char2.length);
        return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
    }
    return {
        fight: fight
    }
})()