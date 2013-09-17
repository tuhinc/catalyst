'use strict';

angular.module('catalystApp', [])
  .config(function ($routeProvider) {
    $routeProvider.when('/', { templateUrl: 'views/main.html', controller: 'MainCtrl' });
    $routeProvider.otherwise({ redirectTo: '/'});
  });
