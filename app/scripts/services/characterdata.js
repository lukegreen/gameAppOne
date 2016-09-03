'use strict';

/**
 * @ngdoc service
 * @name gameAppOneApp.characterData
 * @description
 * # characterData
 * Factory in the gameAppOneApp.
 */
angular.module('gameAppOneApp')
  .factory('characterData', function () {
    function Character(name, type, strength, intelligence, speed, dexterity, magic) {
          this.characterName = name;
          this.characterType = type;
          this.strength = strength;
          this.intelligence = intelligence;
          this.speed = speed;
          this.dexterity = dexterity;
          this.magic = magic;

      };

      Character.prototype.getDetails = function() {
          var self = this;
          return self.characterName;
      };

      return Character;

  });
