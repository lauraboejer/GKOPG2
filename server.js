const http = require('http');
let port = process.argv.splice(2)[0];
console.log (port)

server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    console.log("Server recieved request at port: " + port);
    res.end("It's working! Server recieved request at port: " + port);
});

server.listen(port, function() {
    console.log("Server running at http://localhost:" + port);
});
