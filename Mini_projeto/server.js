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
    database: 'Products'
});
////////////A
app.get('/product', function(request,response){
    connection.query("SELECT * FROM product", function (err, rows, fields) {
        response.send(rows);
    }) 
});
///////////B
app.post('/product', function(request,response){
    var product = request.body;
    connection.query("INSERT product SET ? ",[product] ,function (err, rows, fields) {
        response.send("Product inserted with id: " + rows.insertId);
    })
});
///////////C
app.get('/product/seller_id', function(request,response){
    var seller = request.query.seller_id;
    connection.query("SELECT * FROM product WHERE seller_id = ? ",[seller] ,function (err, rows, fields) {
        response.send(rows);
    })
});
///////////D
app.get('/product', function(request,response){
    var seller = request.query.seller_id;
    connection.query("SELECT * FROM product ",[seller] ,function (err, rows, fields) {
        response.send(rows);
    })

});
/////////E
app.get('/product/tags', function(request,response){
    var tagg = request.query.tags;
    connection.query("SELECT * FROM product WHERE tags = ?",[tagg] ,function (err, rows, fields) {
        response.send(rows);
    })
});
/////PARTE B/////////
////////A
app.get('/product/id', function(request,response){
    var id = request.query.id;
    connection.query("SELECT * FROM product WHERE id = ?",[id] ,function (err, rows, fields) {
        response.send(rows);
    })
});
//////B
app.delete('/product/:id', (request, response) => {
    var id = request.params.id;
        connection.query("DELETE FROM product WHERE id = ?",[id], function (err, rows, fields) {
            if (err) throw err;
            response.send("Affected Rows:" + rows.affectedRows);
        }) 
});
app.put('/product/:id', (request, response) => {
    var id = request.params.id;
    var productfromBody = request.body;
    var product = productObject["product" + id];

    if(product == undefined){
        response.send("this product dont exist!");
    } else{
    productfromBody.id = parseInt(id);
    productObject["product" + id] = productfromBody;
    writeFile('./product.json', JSON.stringify(productObject));
    response.send(productfromBody);

    }
  });
  