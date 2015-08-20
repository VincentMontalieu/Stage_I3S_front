/**
 * Created by vincent on 20/08/15.
 */

'use strict';

app.factory('RecogFactory', function ($http, $q, CONSTANTS) {
  var factory = {

    sendOrgan: function (json_to_send) {
      var deferred = $q.defer();
      $http.post(CONSTANTS.serverAddress + CONSTANTS.recogPath, json_to_send).success(function (data) {
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
