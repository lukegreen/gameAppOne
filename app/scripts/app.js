'use strict';

/**
 * @ngdoc overview
 * @name gameAppOneApp
 * @description
 * # gameAppOneApp
 *
 * Main module of the application.
 */
angular
  .module('gameAppOneApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
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
        controllerAs: 'main',
        activeTab: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about',
        activeTab: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
