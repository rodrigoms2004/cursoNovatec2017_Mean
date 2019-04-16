// test/angularjs/product.edit.controller.test.js

'use strict';

describe('product.edit.controller', function() {
  beforeEach(module('app'));

  var $httpBackend, $controller, $state;
  beforeEach(inject(function(_$httpBackend_, _$controller_, _$state_) {
      $httpBackend = _$httpBackend_;
      $controller = _$controller_;
      $state = _$state_;
  }));

  it('on init should get products list ', function() {
    $state.params.productId = 123;
    var controller = $controller('ProductEditController', { $state: $state });
    expect(controller).toBeDefined();

    var arr = [
      { price: 12.9 }
    ];

    var obj = { price: 12.9, name: 'Shampoo' };
    $httpBackend.when('GET', /.*\.html/).respond(200,''); // tudo que vier de http terminando em html
                                                          // é uma string vazia
    $httpBackend.when('GET', 'api/products/123').respond(200,obj);
    $httpBackend.flush(); // flush libera o resultado do que foi mockado

    expect(controller.data.price).toBe(12.9);
    expect(controller.data.name).toBe('Shampoo');

  });

});
