'use strict';

describe('Controller: MarcusquestionsCtrl', function () {

  // load the controller's module
  beforeEach(module('catalystApp'));

  var MarcusquestionsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MarcusquestionsCtrl = $controller('MarcusquestionsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
