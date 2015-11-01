/**
 * Created by Dejan on 1/11/2015.
 */
'use strict';

angular.module('meanteamApp').service('seasonService', function (Season) {
  var seasonPromise = null,
      param = null;

  angular.extend(this, {
    get: function (param) {
      if (season === null) {
        seasonPromise = Season.get(param);
        param = param;
        return season;
      }
    }
  })
});
