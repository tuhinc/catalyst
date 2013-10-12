'use strict';

angular.module('catalystApp')
  .controller('MainCtrl', function ($scope) {
  	console.log('hi');
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
