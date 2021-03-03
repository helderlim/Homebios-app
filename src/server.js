
const express = require('express');
var app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');


app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password : 'usbw',
  database : 'dbhomebios'

});

var server = app.listen(4541, function(){
  var host = server.address().address
  var port = server.address().port
  console.log("start");
});

con.connect(function(error){
  if(error) console.log(error);
  else console.log("connected ");
});

app.get('/user', function(req, res){ 
  con.query('SELECT * from usuario', function(error, rows, fields){
      if(error) console.log(error);

      else{
          console.log(rows);
          res.send(rows);
      }
  });

})

app.get('/consultaimovel', function(req, res){ 
  con.query('SELECT * from imovel', function(error, rows, fields){
      if(error) console.log(error);

      else{
          console.log(rows);
          res.send(rows);
      }
  });

})

  app.post('/cadimovel', (req, res)=>{
    
    con.query("INSERT INTO imovel (titulo, endereco, estado, municipio, preco, descricao, comodidades, fk_usuario, imagem) values (?,?,?,?,?,?,?, LAST_INSERT_ID(1), ?)", req.body),
    function(error, rows,fields){
      if(error) console.log(error);
       
      else{
        console.log(rows);
        res.send(rows);
      }
    }
  })