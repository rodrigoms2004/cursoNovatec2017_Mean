// server/controller/MainController.js
'use strict'

const bluebird = require('bluebird');
const repository = bluebird.promisifyAll(require('../repository/ProductRepository'));

let MainController = {

  home: function(request, response, next) {
    request.session.user = {
      name: 'rodrigo'
    }

    response.render('index', { title: 'Qq coisa', arr: [1,2,3,4,5] })
    //response.send('wbruno = router');
  },

  create: function(request, response, next) {
    console.log(request.session.user.name);

    //request.session.destroy();
    response.status(201).send('criado');
  },

  listProducts: function(request, response, next) {
    repository.findAsync({})
      .then(function(data) {
        response.render('products', { data: data })
      })
      .catch(next);
  }

};

module.exports = MainController;
