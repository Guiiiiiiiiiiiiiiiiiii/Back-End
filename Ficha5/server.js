


const { response } = require('express');
const express = require('express');
const fs = require('fs'); 
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


function readFile(path){
    var fileContent = fs.readFileSync(path, "utf-8");
    return fileContent;
}
function writeFile(path,data){
  fs.writeFileSync(path,data);
}
console.log(readFile('./persons.json'));


//endpoint. Responde a um pedido HTTP GET.
// 1º é a rota/path do endpoint
// 2º é o código que vai ser executado quando
//este endpoint for invocado
app.get('/', (request, response) => {         
  response.send('Ola guilherme uiiiiiii!'); 
})
app.get('/users', (request, response) => {
  response.send(personObject) ;
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
app.post('/users', (request, response) => {
  //person quem vem no body do pedido
  var person= request.body;
  //selecionar aas chaves num array e obter o seu tamanho
  var size = Object.keys(personObject).length;
  //incrementa 1 valor
  size++;
  //atribuir o id ao tamanho +1
  person.id = size;
  // criar nova chave por exemplo: person6 que tera o valor da person que vem no body
  personObject['person' + person.id] = person;


  writeFile('./persons.json', JSON.stringify(personObject));


  //enviar o id da pessoa que foi inserida
  response.send(personObject);
})
app.delete('/users/:id', (request, response) => {
  var id = request.params.id;
  var person = personObject["person" + id];

  if(person == undefined){
    response.send("This id does not exist")
  }
  else{
    delete personObject["person" + id];
    writeFile('./persons.json', JSON.stringify(personObject));
    response.send("This id " +id +" was deleted")
  }

});
app.get('/users/:id', (request, response) => {
  var id = request.params.id;
  var person = personObject["person" + id];

  if(person == undefined){
    response.send("This id does not exist")
  }
  else{
    response.send(person);
  }
});
app.put('/users/:id', (request, response) => {
  var id = request.params.id;
  var personFromBody = request.body;
  var person = personObject["person" + id];

  if(person == undefined){
    response.send("This id does not exist")
  }
  else{
    personFromBody.id = parseInt(id);
    personObject["person" + id] = personFromBody;
    writeFile('./persons.json', JSON.stringify(personObject));
    response.send(personFromBody);
  }


});


var personsString = readFile('./persons.json');
var personObject = JSON.parse(personsString);