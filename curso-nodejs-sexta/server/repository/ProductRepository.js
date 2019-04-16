// server/repository/ProductRepository.js
'use strict'

const db = require('../config/mongo');

const MAX_RESULTS = 5;

// três formas de declarar funções
let ProductRepository = {
  find: (query, page = 0, callback) => { // bind this
    //db.query('SELECT * FROM TABLE', callback);

    db.collection('products')
      .find(query)
      .limit(MAX_RESULTS)
      .skip(MAX_RESULTS * page, callback);  // pula os primeiros MAX_RESULTS resultados
                                            // recebe o callback
  },
  findOne: function(query, callback) {
    if (query._id) { // se a query for uma _id
      query._id = db.ObjectId(query._id);
    }

    db.collection('products').findOne(query, callback);
  },
  insert(data, callback) {
    db.collection('products').insert(data, callback);
  },
  update: (query, data, callback) => {
    if (query._id) {
      query._id = db.ObjectId(query._id);
    }                                   // modifica apenas o enviado
    db.collection('products').update(query, { $set: data }, callback);
  },
  remove: (query, callback) => {
    if (query._id) { // se a query for uma _id
      query._id = db.ObjectId(query._id);
    }
    db.collection('products').remove(query, callback);
  }
};

module.exports = ProductRepository;
