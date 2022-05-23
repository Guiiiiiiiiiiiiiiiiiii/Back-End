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
////A
app.get('/', (req, res) => {
var body = "Hello world";
res.writeHead(200, {
"Content-Length": Buffer.byteLength(body),
"Content-Type": "text/plain"
 });
 res.end(body)
});
/////B
app.get('/html', (req, res) => {
var body = "<html><h1> Boa <\h1><\html>";
res.writeHead(200, {
"Content-Length": Buffer.byteLength(body),
"Content-Type": "text/html"
 });
 res.end(body)
});
/////C
app.get('/htmll', (req, res) => {
 var body = fs.readFileSync('./index.html');
 res.writeHead(200, {
 "Content-Length": Buffer.byteLength(body),
"Content-Type": "text/html"
});
res.end(body)
});
/////E
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
////5.a
app.get('/user/:name', (req, res) => {

var name = req.params.name; 
var body = readFile('./index.html');
body = body.replace('OI', name);
 res.writeHead(200,{
    'Content-Length': Buffer.byteLength(body),
    'Content-Type': 'text/html'});
res.end(body);
 });
////6
function log (req,res){
var method = req.method;
var path = req.route;
var date = new Date();

var string = "method" + method + "path" + path + "date" + date + "\n";
fs.appendFileSync(log.txt);
}
/////7
app.get('/listar', (req, res) => {
var body= readFile('./log.txt');
res.writeHead(200,{
'Content-Length': Buffer.byteLength(body),
'Content-Type': 'text/plain'});
res.end(body)
});
////8
app.get('/download', function(req,res){ 
res.download('log.txt');
});
////9
app.get('/clear', function(req,res){ 
var file = './log.txt';
var fs = require('fs');

fs.unlinkSync(file);
res.end("Ficheiro log.txt apagado com sucesso");
});
