const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Gateway funcionando!');
});

server.listen(8080, () => {
    console.log('Gateway rodando na porta 8080');
});