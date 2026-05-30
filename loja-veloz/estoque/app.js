const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Servico de Estoque funcionando!');
});

server.listen(8082, () => {
    console.log('Estoque rodando');
});