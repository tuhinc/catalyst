'use strict';

angular.module('catalystApp')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.goTo = function(route){
      $location.url(route);
    }
  });
