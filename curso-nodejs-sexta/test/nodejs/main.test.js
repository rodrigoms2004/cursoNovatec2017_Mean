// test/nodejs/main.test.js
'use strict';

const app = require('../../server/app');
const request = require('supertest')(app); // sobe a app em memória
const assert = require('assert');

// RABBIT MQ

describe('main test', () => { // function() {
  it('GET / should respond 200', (done) => { // arrow function
    request
      .get('/')
      .end(function(err, result) {
        assert.ok(!err);
        assert.equal(200, result.status);
        done(); // aguarda "done" ser chamado para terminar o teste,
                // "done" pode ser qualquer string
      });
      //throw new Error('deu muito muito ruim... que pena...');
  });

  it('GET /not-found respond 404', (doneXPTO) => {
    request
      .get('/not-found')
      .end(function(err, result) {
        assert.equal(404, result.status);
        assert.equal('não existe', result.text); // texto em app.js
        doneXPTO();
      });
  });
  // it.skip ... colocar o teste como pendente
  it.skip('GET /api respond ping', () => {

  });

});
