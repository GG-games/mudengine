'use strict';

var Entity = require_local('Entity');

class GameObject extends Entity {

  constructor() {
    super();

    this.Weight = 0;
    this.Light = 0;
    this.Moveable = false;
    this.Visible = true;
  }

  Delete() {

  }
}

module.exports = GameObject;