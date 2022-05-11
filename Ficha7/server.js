const express = require('express');
const mysql = require('mysql');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));


var server = app.listen(8081, function(){
    var host = server.address().address;
    var port =server.address().port;

    console.log("example app listening at http://%s%s", host, port);
});


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'persons'
});

app.get('/users', function(request,response){
    connection.query("SELECT * FROM person", function (err, rows, fields) {
        response.send(rows);
    }) 
});

app.get('/users/:id', function(request,response){
    var id = request.params.id;
    connection.query("SELECT * FROM person WHERE id = ?",[id] ,function (err, rows, fields) {
        response.send(rows);
    }) 
});
app.get('/users/:age/:profession', function(request,response){
    var age = request.params.age;
    var profession = request.params.profession;
    connection.query("SELECT * FROM person WHERE age = ? and profession = ?",[age,profession] ,function (err, rows, fields) {
        response.send(rows);
    }) 
});
app.put('/users/:id', function(request,response){
    var id = request.params.id;
    var person = request.body;
    connection.query("UPDATE person SET ? WHERE id = ? ",[id,person] ,function (err, rows, fields) {
        response.send(rows);
    }) 
});

app.post('/users', function(request,response){
    var person = request.body;
    connection.query("INSERT person SET ? ",[person] ,function (err, rows, fields) {
        response.send("Person inserted with id: " + rows.insertId);
    }) 
});
app.delete('/product', (request, response) => {
    var product = "DELETE FROM products WHERE id = ?";
    var id = request.body.id;

        connection.query(product, id, function (err, rows, fields) {
            if (error) throw error;
            response.send("Affected Rows:" + rows.affectedRows);
        }) 

  });