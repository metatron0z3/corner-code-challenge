'use strict';

/**
 * @ngdoc overview
 * @name cornerCodeChallengeApp
 * @description
 * # cornerCodeChallengeApp
 *
 * Main module of the application.
 */
angular
  .module('cornerCodeChallengeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
