'use strict';

describe('Controller: MarcusCtrl', function () {

  // load the controller's module
  beforeEach(module('catalystApp'));

  var MarcusCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MarcusCtrl = $controller('MarcusCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
