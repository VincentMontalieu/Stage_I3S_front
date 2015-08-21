/**
 * Created by vincent on 20/08/15.
 */

'use strict';

app.factory('RecogFactory', function ($http, $q, CONSTANTS) {
  var factory = {

    sendOrgan: function (image) {
      var deferred = $q.defer();
      $http.post(CONSTANTS.serverAddress + CONSTANTS.recogPath, image).success(function (data) {
        if (data.status == 'success') {
          deferred.resolve(data.data);
        } else {
          deferred.reject(data.data);
        }
      }).error(function (error) {
        deferred.reject(error);
      });
      return deferred.promise;
    }
  };
  return factory;
});
