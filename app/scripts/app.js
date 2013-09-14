'use strict';

angular.module('catalystApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/doorbell', {
        templateUrl: 'views/doorbell.html',
        controller: 'DoorbellCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
