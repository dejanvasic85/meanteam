'use strict';

angular.module('meanteamApp').service('CurrentSeason', function ($http) {
  var seasonPromise = null;

  angular.extend(this, {
    get: function (seasonName) {
      if (seasonPromise === null) {
        seasonPromise = $http({
          url :'api/seasons?codeName=' + seasonName,
        });
      }
      return seasonPromise;
    }
  })
});
