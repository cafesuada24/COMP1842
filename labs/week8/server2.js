const http = require('http');

const server = http.createServer(function (req, res) {
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(
            '<html><body><p>This is home Page. ID: 001306469</p></body></html>'
        );
        res.end();
    } else if (req.url == '/student') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(
            '<html><body><p>This is student Page. ID: 001306469</p></body></html>'
        );
        res.end();
    } else if (req.url == '/admin') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(
            '<html><body><p>This is admin Page. ID: 001306469</p></body></html>'
        );
        res.end();
    } else if (req.url == '/data') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(
            JSON.stringify({ message: 'Hello World JSON. ID: 001306469' })
        );
        res.end();
    } else {
        res.end('Invalid Request! ID: 001306469');
    }
});
server.listen(8080);
console.log(
    'Node.js web server at port 8080 is running...server2. ID: 001306469'
);
