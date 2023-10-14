const http = require('http');
const fs = require('fs/promises');

const PORT = 8000;

const server = http.createServer(async (request, response) => {
    console.log('Server says Hello!!');

    const contentBufffer = await fs.readFile(__dirname + '/text.txt');
    response.statusCode = 200;
    response.setHeader('content-type', 'text/plain');
    response.end(contentBufffer.toString('utf-8'));
});

server.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});
