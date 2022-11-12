//Server Creation

//1. HTTP module
const http = require('http');
const server=http.createServer((req, res) =>{{
   console.log('request has been made from browser to server');

   res.setHeader('Conent-Type', 'text/plain');
   res.write('Hello, pepcoders ! :)');
   res.end();
}})

//port number, host, callback function
server.listen(3000, 'localhost', () =>{
    console.log('server is listening on port 3000');
})