// const http = require('http');

// const server = http.createServer((request, response) => {
//     console.log('method', request.method);
//     console.log('url', request.url);

//     response.setHeader('Content-Type', 'application/json');
//     response.end(JSON.stringify(user));
// });

// server.listen(3000);

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// app.use((req, res, next) => {
//     console.log('<h1>Hello</h1>');
//     next();
// });

const user = {
    name: 'John',
    hobby: 'Skating'
}

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/:id', (req, res) => {
    // console.log(req.query);
    // console.log(req.headers);
    console.log(req.params);
    res.status(404).res.send('not found');
})

app.get('/profile', (req, res) => {
    res.send('getting profile');
});

app.post('/profile', (req, res) => {
    // res.send(user);
    console.log(req.body);
    res.send('Success');
})

app.listen(3000);