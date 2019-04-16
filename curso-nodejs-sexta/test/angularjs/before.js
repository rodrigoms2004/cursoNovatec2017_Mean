// test/angularjs/before.js

function getElement(compile, $scope, html){
  var element = compile(angular.element(html))($scope);
  $scope.$digest();
  return element;
}
