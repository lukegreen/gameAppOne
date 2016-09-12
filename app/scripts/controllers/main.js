'use strict';

/**
 * @ngdoc function
 * @name gameAppOneApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gameAppOneApp
 */
angular.module('gameAppOneApp')
  .controller('MainCtrl', function ($scope) {

      $scope.characterName = "Beorn";
      $scope.characterType = "Bear Walker";
      $scope.health = 3;
      $scope.attack = 9;
      $scope.defense = 7;
      $scope.agility = 11;
      $scope.craft = 5;
      $scope.morale = 2;


    //write a script that increases or descreases the attribute badge value when the
    //plus or minus button is clicked.  Only the 'active' attribute will be affected.

    $scope.setActiveItem = function($event){
      var activeListItem = this.activeItem;
      console.log(activeListItem);
    };

    $scope.addOne = function(activeListItem){
      //$scope.health = $scope.health + 1;
      if(activeListItem === 'health'){
        $scope.health = $scope.health + 1;
      } else if (activeListItem === 'attack') {
        $scope.attack = $scope.attack + 1;
      } else if (activeListItem === 'defense') {
        $scope.defense = $scope.defense + 1;
      } else if (activeListItem === 'agility') {
        $scope.agility = $scope.agility + 1;
      } else if (activeListItem === 'craft') {
        $scope.craft = $scope.craft + 1;
      } else if (activeListItem === 'morale') {
        $scope.morale = $scope.morale + 1;
      }

    };

    $scope.subtractOne = function(activeListItem){
      //$scope.health = $scope.health - 1;
      if(activeListItem === 'health'){
        $scope.health = $scope.health - 1;
      } else if (activeListItem === 'attack') {
        $scope.attack = $scope.attack - 1;
      } else if (activeListItem === 'defense') {
        $scope.defense = $scope.defense - 1;
      } else if (activeListItem === 'agility') {
        $scope.agility = $scope.agility - 1;
      } else if (activeListItem === 'craft') {
        $scope.craft = $scope.craft - 1;
      } else if (activeListItem === 'morale') {
        $scope.morale = $scope.morale - 1;
      }

    };

    //Next, be sure that the changed values are sent to local storage.

  });
