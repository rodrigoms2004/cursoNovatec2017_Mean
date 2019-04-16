// public/app/_filter/filter.js

(function() {
  'use strict';

  angular
    .module('app')
    .filter('miguxes', miguxes)
    .filter('sum', sum);

  function miguxes() {
    return function(str) {
      if(!str) return;
      // 'shampoo' -> 'ShAmPoO'

      return str.toLowerCase().split('')
        .map(function(letter, i) {
          return i % 2 === 0 ? letter.toUpperCase() : letter;
      })
      .join('');
    }
  }

  function sum() {
    return function(arr, prop) {
      return (arr || []).map(function(item) {   // verifica se o array está vazio []
        return item[prop];
      })
      .reduce(function(prev, curr) {
        return parseFloat(curr || 0, 10) + parseFloat(prev || 0, 10); // base decimal, se não campo numerico coloca zero
      }, 0)
      .toFixed(2);
    }
  }

}());
