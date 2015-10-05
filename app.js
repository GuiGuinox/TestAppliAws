var http = require('http');
var port = 80;
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.write('1ere instance Guillaume !');
res.end();
}).listen(port);
console.log('Serveur tourne sur http://localhost:' +port );
