const express = require('express');
const app = express();
const port = 3000;
var fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

function readFile(fileName) {
    var file = fs.readFileSync(fileName, 'utf-8');
    return file;
}

app.get('/', (req, res) => {
var body = "Hello world";
res.writeHead(200, {
"Content-Length": Buffer.byteLength(body),
"Content-Type": "text/plain"
 });
 res.end(body)
});

app.get('/html', (req, res) => {
    var body = "<html><h1> Boa <\h1><\html>";
    res.writeHead(200, {
    "Content-Length": Buffer.byteLength(body),
    "Content-Type": "text/html"
     });
     res.end(body)
    });
app.get('/htmll', (req, res) => {
 var body = fs.readFileSync('./index.html');
 res.writeHead(200, {
 "Content-Length": Buffer.byteLength(body),
"Content-Type": "text/html"
});
res.end(body)
});

app.get('/replace', (req, res) => {
var body = fs.readFileSync('./index.html',"utf-8");
var date = new Date();
body = body.replace('OI', date.toDateString());
res.writeHead(200, {
"Content-Length": Buffer.byteLength(body),
"Content-Type": "text/html"
});
res.end(body)
});

app.get('/user/:name', (req, res) => {
 
var name = req.params.name;
var body = fs.readFileSync('./index.html',"utf-8");

body = body.replace('OI', name);
res.writeHead(200, {
"Content-Length": Buffer.byteLength(body),
"Content-Type": "text/html"
});
res.end(body)
});