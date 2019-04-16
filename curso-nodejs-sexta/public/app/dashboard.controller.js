// public/app/dashboard.controller.js
(function(){
  'use strict';

  angular.module('app')
  .controller('DashboardController', DashboardController);

  function DashboardController($scope, $http, $timeout, $state) {
    //console.log('Olaaa')
    var vm = this;  // view model
    var API = '';
    vm.remove = remove;

    //vm.products = ['1', '2', '3', '4'];
    //vm.count = 9;
    // $http.get('http://10.0.1.79:3000/api/products)'


    // http://127.0.0.1:3000/#!/dashboard?page=0
    // http://127.0.0.1:3000/#!/dashboard?page=1

    list($state.params.page || 0); // usa parametro ou 0

    function list(page) {
      var params = { params: { page: page } };
      return $http.get(API + '/api/products', params)
        .then(function(response) {
          vm.products = response.data;
        });
    }

    function remove(productId) {
      $http.delete('/api/products/' + productId)
        .then(function(response) {
          vm.message = 'Removido com sucesso';
          vm.type = 'success';
        })
        .then(list)
        .finally(function() {
          $timeout(function() {
            vm.message = null
          }, 2000)

        })
    }

/*
    $timeout(function() {
      vm.products.push({ _id: 999, name: 'Timerrrr' })
    }, 2000)
*/
    return vm;
  }

}()); // IIFE Immediately-invoked function expression
