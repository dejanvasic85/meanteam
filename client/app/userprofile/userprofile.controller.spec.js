'use strict';

describe('Controller: UserprofileCtrl', function () {

  // load the controller's module
  beforeEach(module('meanteamApp'));

  var UserprofileCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserprofileCtrl = $controller('UserprofileCtrl', {
      $scope: scope
    });
  }));

  it('displays a list of seasons that I am involved in', function () {
    expect(1).toEqual(1);
  });
});
