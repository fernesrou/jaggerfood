// modulos node.js permite ultilizar modulos preinstalados, pre-construidos
// para llamarlos require('');
/* nodejs.org  en la pagina nos muestra los modulos preinstalados

npm     node package manager    administrar paquetes o modulos nuevos
nmp init -     
*/
/*
var colors = require('colors');

const http = require('http');

var handleServer = function (req, res) {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('<h1>Hola mundo!</h1><br><a href="http://google.com.ar">Google</a>');
    res.end()};


const server = http.createServer(handleServer);

server.listen(3000);
*/

const express = require('express');
const colors = require('colors');

const server = express();

//settings
server.set('appName', 'Mi primer server');
server.set('views', __dirname + '/views');

//middleware
const morgan = require('morgan');


server.use(morgan('combined'));


server.listen(3000, function () {
    console.log('Server on port 3000'.red);
});

server.get('/', (req, res) => {
    res.render('index.ejs');
});

server.get('/login', (req, res) => {
    res.render('login.ejs');
})
 
