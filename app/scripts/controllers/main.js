'use strict';

/**
 * @ngdoc function
 * @name gameAppOneApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gameAppOneApp
 */
angular.module('gameAppOneApp')
  .controller('MainCtrl', function ($scope, $route) {

      $scope.characterName = "Agnoxis";
      $scope.characterType = "bard";
      $scope.strength = 3;
      $scope.intelligence = 9;
      $scope.speed = 7;
      $scope.dexterity = 11;
      $scope.magic = 5;


    //write a script that increases or descreases the attribute badge value when the
    //plus or minus button is clicked.  Only the 'active' attribute will be affected.

    $scope.testScript = function($event){
      var activeListItem = this.activeItem;
      console.log(activeListItem);
      }

    $scope.addOne = function(activeListItem){
      //$scope.strength = $scope.strength + 1;
      if(activeListItem === 'strength'){
        $scope.strength = $scope.strength + 1;
      } else if (activeListItem === 'intelligence') {
        $scope.intelligence = $scope.intelligence + 1;
      } else if (activeListItem === 'speed') {
        $scope.speed = $scope.speed + 1;
      } else if (activeListItem === 'dexterity') {
        $scope.dexterity = $scope.dexterity + 1;
      } else if (activeListItem === 'magic') {
        $scope.magic = $scope.magic + 1;
      }

    };

    $scope.subtractOne = function(activeListItem){
      //$scope.strength = $scope.strength - 1;
      if(activeListItem === 'strength'){
        $scope.strength = $scope.strength - 1;
      } else if (activeListItem === 'intelligence') {
        $scope.intelligence = $scope.intelligence - 1;
      } else if (activeListItem === 'speed') {
        $scope.speed = $scope.speed - 1;
      } else if (activeListItem === 'dexterity') {
        $scope.dexterity = $scope.dexterity - 1;
      } else if (activeListItem === 'magic') {
        $scope.magic = $scope.magic - 1;
      }

    };

    //Next, be sure that the changed values are sent to local storage.

  });
