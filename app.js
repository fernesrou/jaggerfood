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
const path = require('path');
const route = require('./routes/index');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
const session = require('express-session');
const gsap = require('gsap');
//const flash = require('connect-flash');

//Initializations

const app = express();
//require('./database');



//Settings
// ('nombrevariable', 'valorvariable')

dotenv.config();
app.set('appName', 'Mi primer server');
app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');



//Middlewares
//para procesar datos antes de q llegar a las rutas
// Verbos HTTP => GET / POST / PUT / PATCH / OPTIONS / HEADERS / DELETE
// Por defecto express solo tiene GET y POST
// static archivos estaticos, ej imagenes, css, js, etc.
//app.use(express.static('public')); ---> folders a nivel de proyecto
// body-parser hacer parsing, leer archivos

app.use(bodyParser.json()); //peticiones de formato json
app.use(bodyParser.urlencoded({extended: false})); // entender datos desde formulario de html
app.use(morgan('common'));
app.use(express.json());
app.use(session({
    secret: 'appjagger',
    resave: true,
    saveUninitialized: true
}));

//app.use(flash());

//Routes

app.use(route);
 



// Static files
//En carpeta public, archivos tipicos de frontend, accedida desde el navegador
//fuentes, imagenes, css, javascript, html

//pp.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));



// Start the server

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`.rainbow)
});

//Primero settings
//despues middlewares
//routes
//static files
//start the server
