let express = require('express');
let app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('home');
    // res.send('<h1>Welcome</h1><h2>Blah Blahhhh</h2>');
});

app.get('/fallinlovewith/:thing', function(req, res) {
    let thing = req.params.thing;
    res.render('love', {thingVar: thing});
});

app.get('/posts', function(req, res) {
    let posts = [
        {title: 'Post 1', author: 'Susy'},
        {title: 'Post 2', author: 'Susi'},
        {title: 'Post 3', author: 'Siouxsi'},
        {title: 'Post 4', author: 'Sue-z'},
        {title: 'Post 5', author: 'Soosee'}
    ];
    res.render('posts', {posts: posts});
});

app.listen(3000, function() {
    console.log('running running');
});