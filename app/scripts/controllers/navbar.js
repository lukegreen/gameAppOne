'use strict';

/**
 * @ngdoc function
 * @name gameAppOneApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gameAppOneApp
 */
angular.module('gameAppOneApp')
  .controller('NavCtrl', function ($scope, $route) {

      $scope.$route = $route;

      });
