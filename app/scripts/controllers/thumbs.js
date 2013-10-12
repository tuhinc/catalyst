'use strict';

angular.module('catalystApp')
  .controller('ThumbsCtrl', function ($scope) {
    $scope.thumbClicked = function(data){
    	socket.emit('thumbClicked', data);
    };
  });
