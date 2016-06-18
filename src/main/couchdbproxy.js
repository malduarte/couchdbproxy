var http = require('http');
var httpProxy = require('http-proxy');



httpProxy.createProxyServer({target: "http://localhost:9000"}).listen(8000);
