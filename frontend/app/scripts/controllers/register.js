'use strict';

angular.module('tokenAuthApp')
  .controller('RegisterCtrl', function ($scope, $http, alert) {
    $scope.submit = function() {

      var user = {},
          url = '/';

      $http.post(url, user)
        .success(function(res) {
          alert('success', 'OK', 'You are now registered.');
        })
        .error(function(err) {
          alert('warning', 'Error', 'Could not register.');
        });
    }
  });
