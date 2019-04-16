// server/config/mongo.js
'use strict'

const debug = require('debug')('sexta:config:mongo');
const mongojs = require('mongojs');

let database = process.env.NODE_ENV == 'test' ? 'curso-sexta-test' : 'curso-sexta'
// usar crase
let db = mongojs(`172.16.105.134:27017/${database}`);

module.exports = db;
