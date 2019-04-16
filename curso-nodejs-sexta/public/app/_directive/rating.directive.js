// /app/_directive/rating.directive.js
(function() {
  'use strict';

  angular
    .module('app')
    .directive('novatecRating', novatecRating);

    // toda diretiva deve ter no minimo duas palavras

    // <novatec-rating value="2.5"></novatec-rating>



    function novatecRating() {
      var MAX_STARS = 5;

      var directive = {
        restrict: 'E',  // Element, Atttibute, Class
        scope: {},
        replace: true,
        template: '<span><i class="fa" ng-repeat="star in stars track by $index" ng-class="[star]"></i></span>',
        link: link
      }
      return directive;

      function link(scope, element, attrs) {
        var max = parseInt(attrs.max || MAX_STARS, 10),
        value = parseFloat(attrs.value || 0, 10),
        i = 0;

        scope.stars = {};
        while (i < max) {
          if (value - i >= 1) {
            scope.stars[i] = 'fa-star';
          } else if (value - i <= 0) {
            scope.stars[i] = 'fa-star-o';
          } else {
            scope.stars[i] = 'fa-star-half-o';
          }
          i++;
        }
        console.log(max, value);
      };
  };

}());
