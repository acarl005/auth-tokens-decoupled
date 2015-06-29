'use strict';

angular.module('tokenAuthApp')
  .controller('RegisterCtrl', function ($scope, $http, $state, alert, authToken) {
    $scope.submit = function() {

      var url = 'http://localhost:3000/register',
          user = {
            email: $scope.email,
            password: $scope.password,
          };

      $http.post(url, user)
        .success(function(res) {
          alert('success', 'Registered', 'Welcome, ' + res.user.email + '!');
          authToken.setToken(res.token);
        })
        .error(function(err) {
          alert('warning', 'Error', 'Could not register.');
        });
    }
  });
