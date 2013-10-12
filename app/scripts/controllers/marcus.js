'use strict';

angular.module('catalystApp')
  .controller('MarcusCtrl', function ($scope) {
    $scope.loadQuestions(value){
      console.log(value);
    }
  });
