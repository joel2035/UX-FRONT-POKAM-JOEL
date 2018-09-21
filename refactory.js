'use strict';
var app = angular.module('ngdemoApp', [
    'ngRoute'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'http://www-uat.tictactrip.eu/api/cities/autocomplete/?q=P',
        controller: 'appController',
        controllerAs: 'index'
      })
      .otherwise({
        redirectTo: '/'
      });
  });