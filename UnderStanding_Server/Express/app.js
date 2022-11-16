const { app } = require('express');
const express = require('express');

const app = express();

app.listen(3000);

app.get('/',function(req, res){
    res.send('Hello Wrld');
})
app.get('/index',function(req, res){
    res.sendFile('D:\Backend\Backend\UnderStanding_Server\Express\index.html');
})
app.get('/myindex', (req, res) => {
    res.redirect('D:\Backend\Backend\UnderStanding_Server\Express\index.html');
})