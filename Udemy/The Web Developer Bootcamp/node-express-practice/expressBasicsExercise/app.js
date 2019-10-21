let express = require('express');
let app = express();

app.get('/', function(req, res) {
    res.send('Hi there, welcome to my assignment!');
});

app.get('/speak/:animal', function(req, res) {
    let animal = req.params.animal.toLowerCase();
    let greetings = {
        pig: 'oink',
        cow: 'moo',
        dog: 'woof',
        cat: 'meow',
        horse: 'neigh'
    }
    let greetingString = greetings[animal] ? greetings[animal] : 'nothing!';
    res.send(`The ${animal} says ${greetingString}`);
});

app.get('/repeat/:string/:number', function(req, res) {
    let num = parseFloat(req.params.number);
    let i = 0;
    let text = '';
    while (i < num) {
        text += `${req.params.string} `;
        i++;
    }
    res.send(text);
});

app.get('*', function(req, res) {
    res.send('Sorry, page not found... what are you doing with your life???');
});

app.listen(3000, function() {
    console.log('Server running 3000');
});