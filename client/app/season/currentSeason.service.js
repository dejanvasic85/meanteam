'use strict';

angular.module('meanteamApp').service('CurrentSeason', function ($http, $log) {
  var me = this,
    seasonPromise = null,
    currentSeasonCode = null;

  angular.extend(me, {
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
      me.get().then(function(response){
        $http({
          method : 'POST',
          url : 'api/seasons/' + response.data._id + '/addFixture',
          data : fixture
        })
      });
      me.clearCache();
    },
    clearCache : function(){
      seasonPromise = null;
    }
  })
});
