'use strict';

var BaseMobile = require_local('Mobiles/BaseMobile'),
  AccessLevel = require_local('Mobiles/AccessLevel');

class PlayerMobile extends BaseMobile {

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