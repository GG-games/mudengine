'use strict';

var Mobile = require_local('Mobile'),
  Item = require_local('Items/Item'),
  AccessLevel = require_local('Mobiles/AccessLevel');

class Skill {

  constructor() {
    this.Name = '';
    this.Description = '';
    this.Cap = 100;
    this.StatType = Stat.Strength;
  }

}

module.exports = Skill;
