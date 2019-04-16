// /server/bin/www.js
'use strict'

const debug = require('debug')('sexta:bin:www')
const app = require('../app');
app.listen(3000, function() {
  debug('app running');
});
