const http = require('http');
let httpProxy = require('http-proxy');
let port = process.argv.splice(2)[0];

const proxy = httpProxy.createServer();

let urls = [
    {
        host: "localhost",
        port: 8001
    },
    {
        host: "localhost",
        port: 8002
    },
    {
        host: "localhost",
        port: 8003
    },
    {
        host: "localhost",
        port: 8004
    }
];

loadBalancer = http.createServer(function roundRobin(req, res) {
    let target = {
        target: urls.shift()
    };
    console.log("Load balancer sent request to: http://" + target.target.host + ":" + target.target.port);
    proxy.web(req, res, target);
    urls.push(target);
});

loadBalancer.listen(port || 8000);