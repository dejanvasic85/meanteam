'use strict';

angular.module('meanteamApp').service('CurrentSeason', function ($http) {
  var seasonPromise = null,
    currentSeasonCode = null;

  angular.extend(this, {
    get: function (seasonCode) {
      if (seasonPromise === null) {
        currentSeasonCode = seasonCode;
        seasonPromise = $http({
          url: 'api/seasons?codeName=' + seasonCode,
        });
      }
      return seasonPromise;
    },
    addFixture: function (fixture) {
      if (currentSeasonCode === null) {
        $log.error('sometin wong');
      }
      // Todo - this the endpoint!
      seasonPromise = null; // Kill the cache!
    }
  })
});
