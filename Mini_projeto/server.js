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
// app = instancia da aplicaçao
// get/post/delete = metodo http
// /product/... caminho endpoint 
// request= pedido   // response = resposta
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
app.put('/product/:id/views', function(req,res){
    var id = req.params.id;              
    connection.query("UPDATE product SET views = views + 1 WHERE id = ?",  [id],function(err, rows, fields){
     res.send("Foi adicionado uma view ao produto " + id);
    });
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
//////C
app.put('/product/:id/:images', function(request,response){
    var imagens = request.params.images;
    var id = request.params.id;

    connection.query("SELECT * FROM product WHERE id = ?",  [id],function(err, rows, fields){
        var nc = rows[0].images + ";" + imagens;
        if (err) throw err;


        connection.query("UPDATE product SET images = ? WHERE id = ?",  [nc,id],function(err, rows, fields){
            if (err) throw err;

            connection.query("SELECT * FROM product WHERE id = ?",  [id],function(err, rows, fields){
                response.send(rows)
            })
        })
    });
 })
/////D
  app.put('/product/id', function(req,res){
    var id = req.query.id;
    var comentarios = req.query.comments
    connection.query("SELECT * FROM product WHERE id = ?",  [id],function(err, rows, fields){
        var nc = rows[0].comments + ";" + comentarios;
        if (err) throw err;

        connection.query("UPDATE product SET comments=? WHERE id = ?",  [nc,id],function(err, rows, fields){
        if (err) throw err;

            connection.query("SELECT * FROM product WHERE id = ?",  [id],function(err, rows, fields){
                res.send(rows)
            })
        });
    });
 });
  ////E
  app.get('/product/views', function(req, res){
    connection.query("SELECT * FROM product", function(err,rows,fields){
        rows.sort(function(a,b){
            return b.views - a.views;
        });
        res.send(rows);
    })
})