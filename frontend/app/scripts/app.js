'use strict';

angular
  .module('tokenAuthApp', ['ui.router', 'ngAnimate'])
  .config(function($stateProvider, $urlRouterProvider, $httpProvider) {

    $urlRouterProvider.otherwise("/main");

    $stateProvider
    .state('main', {
      url: '/main',
      templateUrl: '/views/main.html',
    })
    .state('register', {
      url: '/register',
      templateUrl: '/views/register.html',
      controller: 'RegisterCtrl',
    })
    .state('logout', {
      url: '/logout',
      controller: 'LogoutCtrl',
    })
    .state('jobs', {
      url: '/jobs',
      templateUrl: '/views/jobs.html',
      controller: 'JobsCtrl',
    });

    $httpProvider.interceptors.push('authInterceptor');

  })
  .constant('API_URL', 'http://localhost:3000/');
