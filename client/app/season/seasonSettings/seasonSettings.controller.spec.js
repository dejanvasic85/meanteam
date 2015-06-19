'use strict';

describe('Controller: SeasonSettingsCtrl', function () {

  // load the controller's module
  beforeEach(module('meanteamApp'));

  var SeasonSettingsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SeasonSettingsCtrl = $controller('SeasonSettingsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
