// server/controller/ProductController.js

'use strict'

const bluebird = require('bluebird');

//const repository = require('../repository/ProductRepository');
const repository = bluebird.promisifyAll(require('../repository/ProductRepository'));

const debug = require('debug')('sexta:controller:product');

let ProductController = {
  // localhost:3000/api/products/
  // localhost:3000/api/products?name=sh
  list: function(request, response, next) {
    let query = {};
    if (request.query.name) {
      query.name = new RegExp(request.query.name, 'i');
    }
    repository.findAsync(query, request.query.page)
      .then(data => response.json(data))
      .catch(next);
  },
  // /api/products/42?ab=wbruno
  // localhost:3000/api/products/599836d83a1bfd26925cf6b7
  byId: function(request, response, next) {
    let id = request.params.id;
    repository.findOneAsync({ _id: id })
      .then((data) => {
        response.json(data);
      })
      .catch(next);
  },

  // Header: Content-Type: application/json
  // Body: {"name": "Perfume Hugo Boss", "price": 600.0}
  create: function(request, response, next) {
    let body = request.body;
    repository.insertAsync(body)
      .then(data => response.status(201).json(data))
      .catch(next);
      /*
    repository.insert(body, (err, data) => {
      if(err) {
        return next(err);
      }
      response.status(201).json(data);
    })
    //console.log(request.body);
    //response.status(201).send(request.headers);
    */
  },
  update: function(request, response, next) {
    let id = request.params.id;
    let body = request.body;

    delete body._id;  // ver arquivo /public/app/product.edit.controller.js

    repository.update({_id: id}, body, (err, data) => {
      if(err) {
        return next(err);
      }
      response.json(data);
    })
  },
  delete: function(request, response, next) {
    let id = request.params.id;
    repository.remove({_id: id}, (err, data) => {
      if(err) {
        return next(err);
      }
      if (data.n > 0) {
        response.sendStatus(204);
      } else {
        response.sendStatus(404);
      }

    })
  }
};

module.exports = ProductController;
