'use strict';

angular.module('tokenAuthApp')
  .controller('LogoutCtrl', function ($state, authToken) {
    authToken.removeToken();
    $state.go('main');
  });
