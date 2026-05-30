const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Servico de Pedidos funcionando!');
});

server.listen(8081, () => {
    console.log('Pedidos rodando');
});