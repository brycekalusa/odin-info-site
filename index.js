const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer(function(req, res) {
    const url = req.url;
    let fileName = url + '.html';
    if (url === '/') {
        fileName = 'index.html';
    } else if (url === '/about' || url === '/contact-me') {
        fileName = url.slice(1) + '.html';
    } else {
        fileName = '404.html';
    }
    
    fs.readFile(fileName, function(error, data) {
        if (error) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write('Error: File not found');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
        }
        res.end();
    })  
})

server.listen(port, function(error) {
    if (error) {
        console.log('Something went wrong', error);
    } else {
        console.log('Server is listening on port ' + port);
    }
})