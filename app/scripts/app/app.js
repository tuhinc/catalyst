'use strict';

var app = angular.module('catalystApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {templateUrl: 'views/main.html', controller: 'MainCtrl'})
      .when('/doorbell', {templateUrl: 'views/doorbell.html', controller: 'DoorbellCtrl'})
      .when('/marcus', { templateUrl: 'views/marcus.html', controller: 'MarcusCtrl' })
      .when('/user/thumbs', { templateUrl: 'views/thumbs.html', controller: 'ThumbsCtrl' })
      .when('/user/question', { templateUrl: 'views/question.html', controller: 'QuestionCtrl' })
      .otherwise({redirectTo: '/'});
  });
