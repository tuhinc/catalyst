'use strict';

angular.module('catalystApp')
  .controller('MarcusCtrl', function ($scope) {
    $scope.loadQuestions = function(value){
      console.log(value);
    }
  });
