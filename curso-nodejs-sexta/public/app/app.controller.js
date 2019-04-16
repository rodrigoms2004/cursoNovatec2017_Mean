// public/app/app.controller.js
(function(){
  'use strict';

  angular.module('app')
  .controller('AppController', AppController);


  //AppController.$inject = ['$scope']; //  para minificar de forma segura
  // ou usar o comentário abaixo
  // /* @ngInject */
  function AppController($scope) {
    //console.log('Olaaa')
    var vm = this;  // view model

    // evitar usar porque facilita fazer teste unitário
    // $scope.products = ['1', '2', '3'];
    vm.products = ['1', '2', '3'];

    return vm;
  }

}()); // IIFE Immediately-invoked function expression
