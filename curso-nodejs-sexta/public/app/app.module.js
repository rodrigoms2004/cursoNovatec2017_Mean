// public/app/app.module.js
(function(){
  'use strict';

  // app from <main ng-app="app" ng-controller="AppController">
  // inside [] all modules needed
  angular.module('app', [
    'ui.router'
  ])
  .config(runBlock);

  function runBlock() {

  }

}()); // IIFE Immediately-invoked function expression
