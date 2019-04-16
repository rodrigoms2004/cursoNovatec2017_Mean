// server/route/index.js

'use strict';

const ROUTER = require('express').Router();
const MainController = require('../controller/MainController')

// http://localhost:3000
ROUTER.get('/', MainController.home);

ROUTER.get('/login', MainController.create);

ROUTER.get('/products', MainController.listProducts);

// curl -X POST http://localhost:3000
ROUTER.post('/', MainController.create);

ROUTER.use('/api', require('./api'));

module.exports = ROUTER;

//module.exports = {
//  ROUTER: ROUTER // CHAVE, VALOR
//};
