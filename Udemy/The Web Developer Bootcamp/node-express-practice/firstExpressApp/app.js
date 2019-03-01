let express = require('express');

let app = express();

app.get('/', function(req, res) {
    res.send('Hi there!');
});

app.get('/bye', function(req, res) {
    res.send('TOODLES!');
});

app.get('/cat', function(req, res) {
    res.send('MEOOOOOOWWWW');
});

app.get('/r/:subredditName', function(req, res) {
    console.log(req.params);
    let subreddit = req.params.subredditName;
    res.send(`Welcome to the ${subreddit.toUpperCase()} subreddit`);
});

app.get('/r/:subredditName/comments/:id/:title', function(req, res) {
    console.log(req.params);
    res.send('Welcome to the comments page');
});

app.get('*', function(req, res) {
    res.send('You are a STAR!!!');
});

app.listen(3000, function() {
    console.log("Serving on port 3000");
});