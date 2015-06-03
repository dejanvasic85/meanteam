'use strict';

describe('Controller: FixtureCtrl', function () {

  // load the controller's module
  beforeEach(module('meanteamApp'));

  var FixtureCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FixtureCtrl = $controller('FixtureCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
