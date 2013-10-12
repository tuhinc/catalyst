'use strict';

angular.module('catalystApp')
  .controller('MainCtrl', function ($scope, socket) {
  	console.log('hi');
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
