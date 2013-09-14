'use strict';

angular.module('catalystApp')
  .controller('DoorbellCtrl', function ($scope) {
  	$scope.doorbell = function() {
  		confirm('Someone is at the door! Press OK if you are getting the door or cancel to keep working!');
  	}
  });
