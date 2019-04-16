// public/app/product.edit.controller.js
(function(){
  'use strict'

  angular
    .module('app')
    .controller('ProductEditController', ProductEditController);

  function ProductEditController($state, $http, $timeout, ProductService) {
    var vm = this

    vm.save = save;

    var productId = $state.params.productId;

    if(productId) {
      $http.get('api/products/' + productId)
        .then(function(response) {
          vm.data = response.data;
        });
    }

    function save(data) {
      ProductService.save(data)
        .then(function(response) {
          if(response.status < 400) {
            vm.message = 'Deu tudo certo';
            vm.type ='success';
          } else {
            vm.message = response.data;
            vm.type = 'danger';
          }
        })
        .catch(function(err) {
          vm.message = 'Deu ruim... =/';
          vm.type = 'danger';
        })
        .finally(function() {   // apaga as mensagens
          $timeout(function() {
            vm.message = null;
          }, 2000)
        })
    }


    return vm;
  }

}());
