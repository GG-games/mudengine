'use strict';

var Mobile = require_local('Mobile');

class PlayerMobile extends Mobile {

  constructor() {
    super();

    this.Age = 0;
    this.Title = '';
    this.Password = '';
  }

}

module.exports = PlayerMobile;