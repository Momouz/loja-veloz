const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Servico de Pagamentos funcionando!');
});

server.listen(8083, () => {
    console.log('Pagamentos rodando');
});