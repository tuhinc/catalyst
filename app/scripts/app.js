'use strict';

angular.module('catalystApp', [])
  .config(function ($routeProvider) {
    $routeProvider.when('/', { templateUrl: 'views/main.html', controller: 'MainCtrl' });
    $routeProvider.when('/marcus', { templateUrl: 'views/marcus.html', controller: 'MarcusCtrl' });
    $routeProvider.when('/user/thumbs', { templateUrl: 'views/thumbs.html', controller: 'ThumbsCtrl' });
    $routeProvider.when('/user/question', { templateUrl: 'views/question.html', controller: 'QuestionCtrl' });
    $routeProvider.otherwise({ redirectTo: '/'});
  });
