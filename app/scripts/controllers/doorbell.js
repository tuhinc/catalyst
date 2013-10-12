'use strict';

angular.module('catalystApp')
  .controller('DoorbellCtrl', function ($scope, DoorbellService) {
  	$scope.doorbell = function() {
  		DoorbellService.doorbellRang();
  	}
  });
