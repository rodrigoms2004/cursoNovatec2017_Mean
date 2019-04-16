// test/angularjs/_directive/rating.directive.test.js

'use strict'

describe('rating.directive', function() {
  beforeEach(module('app'));

  var $rootScope, $scope, compile;

  beforeEach(inject(function(_$rootScope_, $compile) {
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
    compile = $compile;
  }));

  it('should render stars', function() {
    var html = '<novatec-rating value="3.5"></novatec-rating>';
    var element = getElement(compile, $scope, html);
    //console.log(element);
    expect(element.find('i').length).toEqual(5);
  });

});
