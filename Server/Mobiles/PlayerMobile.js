'use strict';

var Mobile = require_local('Mobile'),
  AccessLevel = require_local('Mobiles/AccessLevel');

class PlayerMobile extends Mobile.BaseMobile {

  constructor() {
    super();

    this.Age = 0;
    this.Password = '';
    this.AccessLevel = AccessLevel.Player;
  }

  get Player() {
    return true;
  }

}

module.exports = PlayerMobile;