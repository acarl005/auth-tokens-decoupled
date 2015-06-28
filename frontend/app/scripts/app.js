'use strict';

angular
  .module('tokenAuthApp', ['ui.router'])
  .config(function($stateProvider) {

    $stateProvider
    .state('register', {
      url: '/register',
      templateUrl: '/views/register.html',
      controller: 'RegisterCtrl',
    })
    .state('main', {
      url: '/main',
      templateUrl: '/views/main.html',
    });

  });
