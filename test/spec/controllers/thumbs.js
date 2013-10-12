'use strict';

describe('Controller: ThumbsCtrl', function () {

  // load the controller's module
  beforeEach(module('catalystApp'));

  var ThumbsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ThumbsCtrl = $controller('ThumbsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
