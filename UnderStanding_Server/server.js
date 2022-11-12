//Server Creation

//1. HTTP module
const http = require('http');
const fs = require('fs');
const server=http.createServer((req, res) =>{{
   console.log('request has been made from browser to server');

   res.setHeader('Conent-Type', 'text/html');
//    res.write('<h1>Hello, Pepcoders !:)</h1>');
//    res.write('<h2>How are you doing</h2>');
    fs.readFile('index.html',(err,fileData) =>{
        if(err){
            console.log(err);
        }else{
            res.write(fileData);
            res.end();
        }
    })
}})

//port number, host, callback function
server.listen(3000, 'localhost', () =>{
    console.log('server is listening on port 3000');
})