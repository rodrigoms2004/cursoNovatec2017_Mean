'use strict'


const express = require('express');
// pode ser const app = require('express')();
const app = express();
const bodyParser = require('body-parser');
const debug = require('debug')('sexta:server:app');
const nunjucks = require('nunjucks');
const session = require('express-session');
const cors = require('cors'); // envia cabeçalhos para liberar métodos e dominios
                              // o browser pode confiar em dominios externos

app.use(cors());

app.use(session({
  secret: 'novatec secret',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
    expires: 1000 * 60 * 60
  }
}))

app.set('view engine', 'html');

nunjucks.configure(__dirname + '/views', {
  autoescape: true,
  express: app,
  tags: ''
});

// tudo o que estiver na pasta public é estático
global.APP_ROOT = require('path').join(__dirname + '/../');
app.use(express.static(APP_ROOT + '/public'));

debug('app', 'outra');
debug('app', '2222');

// middleware para converção em JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// middleware, usando next segue em frente
app.use(function(request, response, next) {
  console.log('passei por aqui: ', request.url);
  next();
});

// ROTA
// ou app.use('/', require('./route/index.js'))
app.use('/', require('./route'))

// middleware para erro 404, se a rota não existir
// passa o parametro err para o próximo middleware
app.use(function(request, response, next) {
  let err = new Error('não existe');
  err.status = 404;
  next(err); // envia err para a próxima função
});
// recebe o parametro err do ultimo middleware
app.use(function(err, request, response, next) {
  // elvis operator
  // se for erro 404 manda a mensagem "não existe", senão responde "deu ruim"
  // logger.error('...');
  response.status(err.status || 500).send(err.message || 'deu ruim')
});

module.exports = app;
