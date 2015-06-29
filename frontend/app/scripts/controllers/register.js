'use strict';

angular.module('tokenAuthApp')
  .controller('RegisterCtrl', function ($scope, $http, $state, alert, authToken, API_URL) {
    $scope.submit = function() {

      var url = API_URL + 'register',
          user = {
            email: $scope.email,
            password: $scope.password,
          };

      $http.post(url, user)
        .success(function(res) {
          authToken.setToken(res.token);
          $state.go('main');
          alert('success', 'Registered', 'Welcome, ' + res.user.email + '!');
        })
        .error(function(err) {
          alert('warning', 'Error', 'Could not register.');
        });
    }
  });
