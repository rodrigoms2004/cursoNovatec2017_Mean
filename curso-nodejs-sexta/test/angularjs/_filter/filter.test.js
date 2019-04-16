// test/angularjs/_filter/filter.test.js

'use strict'

describe('filter', function() {
  beforeEach(module('app'));

  var $filter;

  beforeEach(inject(function(_$filter_){
      $filter = _$filter_;
  }));

  it('#sum should do his magic', function() {
    var sum = $filter('sum');
    var arr = [
      { price: 40.1, name: 'shampoo 1'},
      { price: 30.1, name: 'shampoo 2'},
      { price: 20.1, name: 'shampoo 3'}
    ]
    expect(sum(arr, 'price')).toEqual('90.30');
    expect(sum(null, 'price')).toEqual('0.00');
  });


  it('# test miguxes', function() {
    var miguxes = $filter('miguxes');

    var str = "testeBase";
    expect(miguxes('shampoo')).toEqual('ShAmPoO');
    expect(miguxes('condicionador')).toEqual('CoNdIcIoNaDoR');
    expect(miguxes('')).toEqual(undefined);
  });

});
