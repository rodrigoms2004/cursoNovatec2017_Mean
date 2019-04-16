// public/app/_component/product.table.component.js
(function(){

  angular
    .module('app')
    .component('productTable', {
      restrict: 'E',      // só funciona como elemento
      templateUrl: 'app/views/product.table.html',
      controller: ProductTableController,
      controllerAs: 'vm',
      bindings: {
        data: '<' // >, @, &, =
      }
    });

  function ProductTableController() {
    var vm = this;

    vm.$onInit = onInit;

    function onInit() {
      vm.products = vm.data;
    }

    return vm;
  }

}());
