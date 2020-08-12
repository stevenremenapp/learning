const http = require('http');

// function reqListener(req, res) {
// }

// http.createServer(reqListener);

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Enter message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('<html>');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>First page</title></head>');
  res.write('<body><h1>First boday</h1></body>');
  res.write('<html>');
  res.end();
});

server.listen(3000);