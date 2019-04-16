// /server/route/api.js

'use strict'

const router = require('express').Router();
const ProductController = require('../controller/ProductController');

// middleware para validar o id
function validatedId(request, response, next) {
  let id = request.params.id;
  if (/^[0-9a-z]{24}$/.test(id)) { // /^[0-9a-z]i$/ i desativa o case sensitive
    return next();
  }
  let err = new Error('invalid id');
  err.status = 422; // unprocessable error
  next(err);
}

router.get('/products', ProductController.list);
router.get('/products/:id', validatedId, ProductController.byId);
router.post('/products', ProductController.create);
router.put('/products/:id', validatedId, ProductController.update);
router.delete('/products/:id', validatedId, ProductController.delete);

module.exports = router;
