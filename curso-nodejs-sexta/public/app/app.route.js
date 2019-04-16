(function(){
  'use strict';

  // fluent interface pattern
  angular
    .module('app')
    .run(runBlock)
    .config(config)

  function runBlock() {

  }

  function config($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/dashboard');
      $stateProvider
      .state('app', {
        abstract: true,
        views: {
          '': {
            templateUrl: '/_layout/layout.html'
          }
        }
      })
      .state('app.dashboard', {
        url: '/dashboard?page',
        controller: 'DashboardController as vm',
        templateUrl: '/app/views/dashboard.html'
      })
      .state('app.product', {         // quando este state for chamado
        url: '/products/:productId',   // com parametro
        controller: 'ProductEditController as vm',
        templateUrl: '/app/views/product.html'
      })
  }


}()); // IIFE Immediately-invoked function expression
// public/app/app.route.js
