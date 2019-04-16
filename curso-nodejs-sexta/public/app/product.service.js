// public/app/product.service.js
(function() {
  'use strict'

  angular
    .module('app')
    .factory('ProductService', ProductService);
    // factory é um singleton, compartilhando status numa mesma instância


  function ProductService($http) {
    var service = {
      save: function(data) {
        var promise;

        if(data._id) {  // update or create
          var _data = angular.copy(data);
          delete _data._id; // remove o id para evitar modificar o banco
                            // ou no controller apagar o id /server/controller/ProductController.js
            promise = $http.put('api/products/' + data._id, _data)
        } else {
            promise = $http.post('api/products', data)
        }
        return promise;
      }
    };
    return service;
  }
}());
