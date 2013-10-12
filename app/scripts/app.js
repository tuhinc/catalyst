'use strict';

angular.module('catalystApp', [])
  .config(function ($routeProvider) {
    $routeProvider.when('/', { templateUrl: 'views/main.html', controller: 'MainCtrl' });
    $routeProvider.when('/marcus', { templateUrl: 'views/main.html', controller: 'MainCtrl' });
    $routeProvider.when('/user/tumbs', { templateUrl: 'views/main.html', controller: 'MainCtrl' });
    $routeProvider.when('/user/question', { templateUrl: 'views/main.html', controller: 'MainCtrl' });
    $routeProvider.otherwise({ redirectTo: '/'});
  });
